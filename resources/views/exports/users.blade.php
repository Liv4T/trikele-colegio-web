<table>
    <thead>
    <tr>
        <th>Nombre</th>
        <th>Apellido</th>
         <th>N° identificación</th>
        <th>Email</th>
    </tr>
    </thead>
    <tbody>
    @foreach($users as $user)
        <tr>
            <td>{{ $user->name }}</td>
            <td>{{ $user->last_name }}</td>
             <td>{{ $user->id_number }}</td>
            <td>{{ $user->email }}</td>
        </tr>
    @endforeach
    </tbody>
</table>
