<?php

public function test_roles_and_permissions_are_cached()
{
    $user = User::factory()->create();
    $role = Role::create(['name' => 'admin']);
    $permission = Permission::create(['name' => 'edit-posts']);
    $role->permissions()->attach($permission);
    $user->roles()->attach($role);

    // Simulate caching
    cache()->put('user_roles_permissions_' . $user->id, ['admin', 'edit-posts'], 60);

    $this->assertTrue($user->hasRole('admin'));
    $this->assertTrue($user->hasPermission('edit-posts'));
}
