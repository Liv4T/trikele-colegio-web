<?php

namespace App\Http\Controllers;

use App\Conversation;
use App\User;
use App\Events\NewMessage;
use Illuminate\Http\Request;
use GuzzleHttp\Client;


class ConversationController extends Controller
{
    public function store()
    {
        $conversation = Conversation::create([
            'message' => request('message'),
            'group_id' => request('group_id'),
            'type' => request('type'),
            'user_id' => auth()->user()->id,
        ]);

        broadcast(new NewMessage($conversation))->toOthers();

        return $conversation->load('user');
    }
    public function getConversation($id)
    {
        $conversations = Conversation::where('group_id', $id)->get();
        foreach ($conversations as $conversation) {
            $user = User::find($conversation->user_id);
            $conversation->user = $user;
        }
        return $conversations;
    }

    public function uploadFile(Request $request)
    {
        // return $request;
        $file = request('file');
        // dd($file);
        if (!empty($file)) {
            $fileName = $file->getClientOriginalName();
            // file with path
            $filePath = url('uploads/chats/' . $fileName);
            //Move Uploaded File
            $destinationPath = 'uploads/chats';
            if ($file->move($destinationPath, $fileName)) {
                $request['file_path'] = $filePath;
                $request['file_name'] = $fileName;
                $request['message'] = 'file';
                $request['type'] = request('type');
            }
            $conversation = Conversation::create([
                'message' => $filePath,
                'group_id' => $request->group_id,
                'type' => $request->type,
                'user_id' => auth()->user()->id,
            ]);

            return $conversation->load('user');
        }
    }
    public function saveAudio(Request $request)
    {
        $hoy = getdate();
        $path_name = $hoy[0];
        $id = auth()->user()->id;
        $file = request('audio');
        if (!empty($file)) {
            $fileName = $id . $path_name . ".mp3";
            $filePath = url('uploads/chats/' . $fileName);
            $destinationPath = 'uploads/chats';
            if ($file->move($destinationPath, $fileName)) {
                $conversation = Conversation::create([
                    'message' => $filePath,
                    'group_id' => $request->group_id,
                    'type' => $request->type,
                    'user_id' => auth()->user()->id,
                ]);
            }

            return $conversation->load('user');
        }
    }
}
