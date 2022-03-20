<?php

public function test_assign_role_to_user()
{
    $user = User::factory()->create();
    $role = Role::create(['name' => 'admin']);

    $user->roles()->attach($role);

    $this->assertTrue($user->roles->contains('name', 'admin'));
}

public function test_user_has_role()
{
    $user = User::factory()->create();
    $role = Role::create(['name' => 'admin']);
    $user->roles()->attach($role);

    $this->assertTrue($user->hasRole('admin'));
}

public function test_user_has_permission()
{
    $user = User::factory()->create();
    $role = Role::create(['name' => 'admin']);
    $permission = Permission::create(['name' => 'edit-posts']);
    $role->permissions()->attach($permission);
    $user->roles()->attach($role);

    $this->assertTrue($user->hasPermission('edit-posts'));
}

public function test_user_role_inheritance()
{
    $user = User::factory()->create();
    $adminRole = Role::create(['name' => 'admin']);
    $editorRole = Role::create(['name' => 'editor', 'parent_id' => $adminRole->id]);

    $permission = Permission::create(['name' => 'edit-posts']);
    $adminRole->permissions()->attach($permission);
    $user->roles()->attach($editorRole);

    $this->assertTrue($user->hasPermission('edit-posts'));
}
