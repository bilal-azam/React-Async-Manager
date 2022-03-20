<?php

public function test_service_provider_is_loaded()
{
    $this->assertTrue(
        $this->app->getProvider(\Vendor\AdvancedRBAC\RBACServiceProvider::class) instanceof \Vendor\AdvancedRBAC\RBACServiceProvider
    );
}

public function test_configuration_is_merged()
{
    $this->assertEquals(true, config('rbac.cache.enabled'));
    $this->assertEquals(60, config('rbac.cache.duration'));
}
