<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInita249bdb23d8d6b20123af2f6171286eb
{
    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->classMap = ComposerStaticInita249bdb23d8d6b20123af2f6171286eb::$classMap;

        }, null, ClassLoader::class);
    }
}
