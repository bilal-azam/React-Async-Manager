<?php

namespace Vendor\AdvancedRBAC\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckPermission
{
    public function handle(Request $request, Closure $next, $permission)
    {
        if (!auth()->user() || !auth()->user()->hasPermission($permission)) {
            abort(403, 'Unauthorized.');
        }

        return $next($request);
    }
}
