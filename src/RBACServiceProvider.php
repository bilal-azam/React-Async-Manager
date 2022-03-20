<?php

namespace Vendor\AdvancedRBAC;

use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;

class RBACServiceProvider extends ServiceProvider
{
    public function boot()
    {
        // Register custom Blade directives here

        Blade::directive('role', function ($role) {
            return "<?php if(auth()->check() && auth()->user()->hasRole({$role})): ?>";
        });

        Blade::directive('endrole', function () {
            return "<?php endif; ?>";
        });

        Blade::directive('permission', function ($permission) {
            return "<?php if(auth()->check() && auth()->user()->hasPermission({$permission})): ?>";
        });

        Blade::directive('endpermission', function () {
            return "<?php endif; ?>";
        });

        // Load the migrations
        $this->loadMigrationsFrom(__DIR__.'/../database/migrations');

        // Publish the config file
        $this->publishes([
            __DIR__.'/../config/rbac.php' => config_path('rbac.php'),
        ], 'config');
    }

    public function register()
    {
        // Merge configuration
        $this->mergeConfigFrom(
            __DIR__.'/../config/rbac.php', 'rbac'
        );
    }
}
