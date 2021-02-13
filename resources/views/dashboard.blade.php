@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Users</div>
                    <div class="panel-body">
                    <!--when you invite someone he recived a email with the invitacion to participate and the link to register.-->
                     <form class="custom-horizontal" action="{{ route('admin.dashboard.invite') }}" method="post">
                        <div class="form-group col-md-6{{ $errors->has('inviteeEmail') ? ' has-error' : '' }}">
                            <label for="inviteeEmail" class="control-label">Email address of the invitade</label>
                            <input type="email" name="inviteeEmail" id="inviteeEmail" class="form-control" value="{{ (old('inviteeEmail') ? old('inviteeEmail') : '' ) }}" placeholder="Enter the email address of invitee">
                            @if ($errors->has('inviteeEmail'))
                                <div class="help-block danger">
                                    {{ $errors->first('inviteeEmail') }}
                                </div>
                            @endif
                         </div>
                         <div class="form-group col-md-4{{ $errors->has('inviteeRole') ? ' has-error' : '' }}">
                            <label for="inviteeRole" class="control-label">Pick a role</label>
                            <select name="inviteeRole" id="inviteeRole" class="form-control">
                               <!-- remember the role limit what the users see, 
                                admin he can create,delete,add member to the forum and recive messages of other users reposting the forums they can see al dasboards,
                                moderator can create and delete the topic of his forum and add members,
                                user only can see the topic,add a new one or comment any forum they subscribe.-->
                                @foreach (Config::get('enums.roles') as $role)
                                    <option value="{{ $role }}">{{ ucfirst($role) }}</option>
                                @endforeach
                            </select>
                            @if ($errors->has('inviteeRole'))
                                <div class="help-block danger">
                                    {{ $errors->first('inviteeRole') }}
                                </div>
                            @endif
                            <!--when you invite someone you have to added with @Username, it is the only way to add someone.--> 
                         </div>
                         <div class="col-md-2">
                            {{ csrf_field() }}
                            <button type="submit" class="btn btn-default pull-right">Invite</button>
                         </div>
                     </form>
                 </div>
             </div>
         </div>
      </div>
      <div>
         <section class="responsive">
             <div class="row">
                 <div class="col">
                    <button type="submit">
                        Board
                    </button>
                    <button type="submit">
                        Forum
                    </button>
                    <button type="submit">
                        Chat
                    </button>
                    <button type="submit">
                        Live
                    </button>
                    <button type="submit">
                        Video
                    </button>
                  </div>
              </div>
          </section>
      </div>

    @if (count($users))
        <modify-users users-prop="{{ $users }}"></modify-users>
    @endif

</div>
@endsection
