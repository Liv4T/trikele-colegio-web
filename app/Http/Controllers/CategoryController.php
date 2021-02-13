<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;
use App\Subcategory;
use App\TypeUser;

class CategoryController extends Controller
{
    public function GetCategories()
    {
        $Categories = Category::all();
        $data = [];
        $data[0] = [
            'id'   => 0,
            'text' =>'Seleccione',
        ];
        foreach ($Categories as $key => $value) {
            $data[$key+1] =[
                'id'   => $value->id,
                'text' => $value->name_category,
            ];
        }
        return response()->json($data);
    }
    public function GetTypeU()
    {
        $typeUsers = TypeUser::all();
        $data = [];
        $data[0] = [
            'id'   => 0,
            'text' =>'Seleccione',
        ];
        foreach ($typeUsers as $key => $value) {
            $data[$key+1] =[
                'id'   => $value->id,
                'text' => $value->name,
            ];
        }
        return response()->json($data);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Category::all();
        return $categories;
        /*$categories = Category::orderBy('id','DESC')->paginate(4);
        return [
            'pagination'      => [
               'total'        => $categories->total(),
               'current_page' => $categories->currentPage(),
               'per_page'     => $categories->perPage(),
               'last_page'    => $categories->lastPage(),
               'from'         => $categories->firstItem(),
               'to'           => $categories->lastItem(),
            ],
            'categories' => $categories
        ];*/
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
     
        $this->validate($request, [
        
            'name_category'=>'required',
            'name_subcategory'=>'required',
        ]);
        $data = $request->all();
        $category = Category::create([
            'name_category' => $data['name_category']
        ]);

        $subCategories = $data['name_subcategory'];

        foreach($subCategories as $index => $subCategory) { 
            $subCate = Subcategory::create([
                'name_subcategory' => $subCategory,
                'id_category' => $category->id
            ]);
        }
        return;
    }
    public function GetSubcategories($id)
    {
        $Subcategories = Subcategory::where('id_category',$id)->get();
        $data = [];
        $data[0] = [
            'id'   => 0,
            'text' =>'Seleccione',
        ];
        foreach ($Subcategories as $key => $value) {
           $data[$key+1] =[
                'id'   => $value->id,
                'text' => $value->name_subcategory,
            ];
        }
        return response()->json($data);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'name_category' => 'required'
        ]);
        Category::find($id)->update($request->all());
        return;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $categories = Category::findOrFail($id);
        $categories->delete();
    }
}
