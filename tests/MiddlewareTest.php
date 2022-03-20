<?php

public function test_middleware_allows_access_with_permission()
{
    $user = User::factory()->create();
    $role = Role::create(['name' => 'admin']);
    $permission = Permission::create(['name' => 'view-dashboard']);
    $role->permissions()->attach($permission);
    $user->roles()->attach($role);

    $response = $this->actingAs($user)->get('/dashboard');

    $response->assertStatus(200);  // Assuming /dashboard is protected by middleware
}

public function test_middleware_denies_access_without_permission()
{
    $user = User::factory()->create();

    $response = $this->actingAs($user)->get('/dashboard');

    $response->assertStatus(403);  // Assuming /dashboard is protected by middleware
}