<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'K21oy2gpFgYmGatxQsLO9IuiNM7X9PstYTES0N2PMFUcK1xVcz+4JT3WdQgvJDHXOUwKtXU3GqfVBQD1ICEPvw==');
define('SECURE_AUTH_KEY',  's4NigRvXFhI38el5ruPjXsZQcANjNwbaq5T1FYteDRFElg+r2ZFxTk4wkmhzxafDVggWfDENpjfQZ6wQe6pFUw==');
define('LOGGED_IN_KEY',    'OeYhVslO74bHsfsOzfAiSQ9ZVDm1ptDdFUd/Qg66qfhLqTiSmSzaBifyaizpwhtAgnvdIZcGtAQzfy0iHIuszw==');
define('NONCE_KEY',        '8xBh6m4Xe+2b7F/szhrJ5Mk7f1sWZI4S999krYfUfRXmLkQ2IF0JeTEnJp57IsiHEZfsE38uv7qvY6j1N6cwcg==');
define('AUTH_SALT',        '7EPf4qsdxbfqwm4aESx6nUf9+PYb1oHsCdgmEkXIomhwi3Lls8pzfQ3Puq5NKBTmcxMhYI9tWcD3+RDWHw3SAg==');
define('SECURE_AUTH_SALT', 'Cr1HLlRM1M0hQzBkX4We0AQ9R9N2zxQ6UJYk85D3EMHjA0LAcbXlT8vmbl/JUO0h4j6jjdnU4FFpsffSIXpsZQ==');
define('LOGGED_IN_SALT',   'VOm8wLwXHcGkYeoJVtSpgkqCwXNQjFStihE50eEDO0dEyS5jH/Xwbpue+TEneZww00/jtSOmEhK0bvfCg2a89g==');
define('NONCE_SALT',       'ZpMRKvMSCcBkEZZwMGQO2G8ccohM4+KhDpj33FM0hz0Nje2CGzm7IzhQeIgRsZes7enAKYENMMyrV1eOinBU6Q==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'rj_';




/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) )
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
