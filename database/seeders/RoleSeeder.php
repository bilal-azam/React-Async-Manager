<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Vendor\AdvancedRBAC\Models\Role;
use Vendor\AdvancedRBAC\Models\Permission;

class RoleSeeder extends Seeder
{
    public function run()
    {
        $adminRole = Role::create(['name' => 'admin', 'description' => 'Administrator role']);
        $editorRole = Role::create(['name' => 'editor', 'description' => 'Editor role']);

        $editPostsPermission = Permission::create(['name' => 'edit-posts', 'description' => 'Permission to edit posts']);
        
        $adminRole->permissions()->attach($editPostsPermission);
    }
}
