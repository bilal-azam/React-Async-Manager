<?php

public function test_role_creation()
{
    $role = Role::create(['name' => 'admin', 'description' => 'Administrator']);

    $this->assertDatabaseHas('roles', [
        'name' => 'admin',
        'description' => 'Administrator'
    ]);
}

public function test_role_deletion()
{
    $role = Role::create(['name' => 'editor']);
    $role->delete();

    $this->assertDatabaseMissing('roles', ['name' => 'editor']);
}

public function test_role_update()
{
    $role = Role::create(['name' => 'moderator']);
    $role->update(['name' => 'super-moderator']);

    $this->assertDatabaseHas('roles', ['name' => 'super-moderator']);
}

public function test_role_inheritance()
{
    $parentRole = Role::create(['name' => 'admin']);
    $childRole = Role::create(['name' => 'editor', 'parent_id' => $parentRole->id]);

    $this->assertTrue($childRole->parent_id === $parentRole->id);
}
