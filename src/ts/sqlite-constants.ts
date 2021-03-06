namespace Module {
    export enum SQLiteResult {
        /** Successful result */
        OK = 0,

        /** Generic error */
        ERROR = 1,
        /** Internal logic error in SQLite */
        INTERNAL = 2,
        /** Access permission denied */
        PERM = 3,
        /** Callback routine requested an abort */
        ABORT = 4,
        /** The database file is locked */
        BUSY = 5,
        /** A table in the database is locked */
        LOCKED = 6,
        /** A malloc() failed */
        NOMEM = 7,
        /** Attempt to write a readonly database */
        READONLY = 8,
        /** Operation terminated by sqlite3_interrupt()*/
        INTERRUPT = 9,
        /** Some kind of disk I/O error occurred */
        IOERR = 10,
        /** The database disk image is malformed */
        CORRUPT = 11,
        /** Unknown opcode in sqlite3_file_control() */
        NOTFOUND = 12,
        /** Insertion failed because database is full */
        FULL = 13,
        /** Unable to open the database file */
        CANTOPEN = 14,
        /** Database lock protocol error */
        PROTOCOL = 15,
        /** Not used */
        EMPTY = 16,
        /** The database schema changed */
        SCHEMA = 17,
        /** String or BLOB exceeds size limit */
        TOOBIG = 18,
        /** Abort due to constraint violation */
        CONSTRAINT = 19,
        /** Data type mismatch */
        MISMATCH = 20,
        /** Library used incorrectly */
        MISUSE = 21,
        /** Uses OS features not supported on host */
        NOLFS = 22,
        /** Authorization denied */
        AUTH = 23,
        /** Not used */
        FORMAT = 24,
        /** 2nd parameter to sqlite3_bind out of range */
        RANGE = 25,
        /** File opened that is not a database file */
        NOTADB = 26,
        /** Notifications from sqlite3_log() */
        NOTICE = 27,
        /** Warnings from sqlite3_log() */
        WARNING = 28,
        /** sqlite3_step() has another row ready */
        ROW = 100,
        /** sqlite3_step() has finished executing */
        DONE = 101,

        IOERR_READ = (IOERR | (1 << 8)),
        IOERR_SHORT_READ = (IOERR | (2 << 8)),
        IOERR_WRITE = (IOERR | (3 << 8)),
        IOERR_FSYNC = (IOERR | (4 << 8)),
        IOERR_DIR_FSYNC = (IOERR | (5 << 8)),
        IOERR_TRUNCATE = (IOERR | (6 << 8)),
        IOERR_FSTAT = (IOERR | (7 << 8)),
        IOERR_UNLOCK = (IOERR | (8 << 8)),
        IOERR_RDLOCK = (IOERR | (9 << 8)),
        IOERR_DELETE = (IOERR | (10 << 8)),
        IOERR_BLOCKED = (IOERR | (11 << 8)),
        IOERR_NOMEM = (IOERR | (12 << 8)),
        IOERR_ACCESS = (IOERR | (13 << 8)),
        IOERR_CHECKRESERVEDLOCK = (IOERR | (14 << 8)),
        IOERR_LOCK = (IOERR | (15 << 8)),
        IOERR_CLOSE = (IOERR | (16 << 8)),
        IOERR_DIR_CLOSE = (IOERR | (17 << 8)),
        IOERR_SHMOPEN = (IOERR | (18 << 8)),
        IOERR_SHMSIZE = (IOERR | (19 << 8)),
        IOERR_SHMLOCK = (IOERR | (20 << 8)),
        IOERR_SHMMAP = (IOERR | (21 << 8)),
        IOERR_SEEK = (IOERR | (22 << 8)),
        IOERR_DELETE_NOENT = (IOERR | (23 << 8)),
        IOERR_MMAP = (IOERR | (24 << 8)),
        IOERR_GETTEMPPATH = (IOERR | (25 << 8)),
        IOERR_CONVPATH = (IOERR | (26 << 8)),
        IOERR_VNODE = (IOERR | (27 << 8)),
        IOERR_AUTH = (IOERR | (28 << 8)),
        LOCKED_SHAREDCACHE = (LOCKED | (1 << 8)),
        BUSY_RECOVERY = (BUSY | (1 << 8)),
        BUSY_SNAPSHOT = (BUSY | (2 << 8)),
        CANTOPEN_NOTEMPDIR = (CANTOPEN | (1 << 8)),
        CANTOPEN_ISDIR = (CANTOPEN | (2 << 8)),
        CANTOPEN_FULLPATH = (CANTOPEN | (3 << 8)),
        CANTOPEN_CONVPATH = (CANTOPEN | (4 << 8)),
        CORRUPT_VTAB = (CORRUPT | (1 << 8)),
        READONLY_RECOVERY = (READONLY | (1 << 8)),
        READONLY_CANTLOCK = (READONLY | (2 << 8)),
        READONLY_ROLLBACK = (READONLY | (3 << 8)),
        READONLY_DBMOVED = (READONLY | (4 << 8)),
        ABORT_ROLLBACK = (ABORT | (2 << 8)),
        CONSTRAINT_CHECK = (CONSTRAINT | (1 << 8)),
        CONSTRAINT_COMMITHOOK = (CONSTRAINT | (2 << 8)),
        CONSTRAINT_FOREIGNKEY = (CONSTRAINT | (3 << 8)),
        CONSTRAINT_FUNCTION = (CONSTRAINT | (4 << 8)),
        CONSTRAINT_NOTNULL = (CONSTRAINT | (5 << 8)),
        CONSTRAINT_PRIMARYKEY = (CONSTRAINT | (6 << 8)),
        CONSTRAINT_TRIGGER = (CONSTRAINT | (7 << 8)),
        CONSTRAINT_UNIQUE = (CONSTRAINT | (8 << 8)),
        CONSTRAINT_VTAB = (CONSTRAINT | (9 << 8)),
        CONSTRAINT_ROWID = (CONSTRAINT | (10 << 8)),
        NOTICE_RECOVER_WAL = (NOTICE | (1 << 8)),
        NOTICE_RECOVER_ROLLBACK = (NOTICE | (2 << 8)),
        WARNING_AUTOINDEX = (WARNING | (1 << 8)),
        AUTH_USER = (AUTH | (1 << 8)),
        OK_LOAD_PERMANENTLY = (OK | (1 << 8)),
    }
}
