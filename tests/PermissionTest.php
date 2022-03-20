<?php

public function test_permission_creation()
{
    $permission = Permission::create(['name' => 'edit-posts', 'description' => 'Edit blog posts']);

    $this->assertDatabaseHas('permissions', [
        'name' => 'edit-posts',
        'description' => 'Edit blog posts'
    ]);
}

public function test_permission_deletion()
{
    $permission = Permission::create(['name' => 'delete-posts']);
    $permission->delete();

    $this->assertDatabaseMissing('permissions', ['name' => 'delete-posts']);
}

public function test_assign_permission_to_role()
{
    $role = Role::create(['name' => 'admin']);
    $permission = Permission::create(['name' => 'edit-users']);

    $role->permissions()->attach($permission);

    $this->assertTrue($role->permissions->contains('name', 'edit-users'));
}
