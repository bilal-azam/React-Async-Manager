<?php

public function test_role_blade_directive()
{
    $user = User::factory()->create();
    $role = Role::create(['name' => 'admin']);
    $user->roles()->attach($role);

    $view = $this->actingAs($user)->blade('@role("admin") Hello @endrole', []);

    $view->assertSee('Hello');
}

public function test_permission_blade_directive()
{
    $user = User::factory()->create();
    $role = Role::create(['name' => 'admin']);
    $permission = Permission::create(['name' => 'edit-posts']);
    $role->permissions()->attach($permission);
    $user->roles()->attach($role);

    $view = $this->actingAs($user)->blade('@permission("edit-posts") Hello @endpermission', []);

    $view->assertSee('Hello');
}
