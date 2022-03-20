<?php

namespace Vendor\AdvancedRBAC\Models;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $fillable = ['name', 'description', 'parent_id'];

    public function permissions()
    {
        return $this->belongsToMany(Permission::class);
    }

    public function children()
    {
        return $this->hasMany(Role::class, 'parent_id');
    }
}
