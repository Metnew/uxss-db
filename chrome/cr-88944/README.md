# Use-after free in leveldb

> Reported by miau...@gmail.com, Jul 11 2011

## VULNERABILITY DETAILS

use-after-free in browser with indexeddatabase

## VERSION

Chrome Version: trunk (14)
Operating System: linux 64bit

## REPRODUCTION CASE

sorry for the complicated setup:

``` html
<script>
    eval("webkitIndexedDB.open('transaction-crash-on-abort')");
</script>
```

served from http://george.fi/jepa.html (uh oh).

start the browser with:

``` sh
/home/user/chromium/src/tools/valgrind/valgrind.sh /home/user/chromium/src/out/Release/chrome 
--no-first-run --user-data-dir=$HOME/fuzz/user/4 http://george.fi/jepa.html
```

and have `user-data-dir.zip` in `$HOME/fuzz/user/4`

I didn't manage to create a database for local files :(

user data dir contains a database that has:
``` sql
INSERT INTO "Databases" VALUES(2,'transaction-crash-on-abort','','');
```
and there are a couple of small binary files in the indexeddb directory.

this bug will also crash chromium-browser daily build with segfault at RIP.

## CRASH

Type of crash: browser
Crash State: 
Invalid read of size 8
at 0x26EFF09: leveldb::InternalKeyComparator::FindShortSuccessor(std::string*) const by 0x26FC506: 
leveldb::TableBuilder::Finish()
Address 0x264c8750 is 0 bytes inside a block of size 16 free'd
Address 0x4141414141414169 is not stack'd, malloc'd or (recently) free'd
at 0x26EFF0C: leveldb::InternalKeyComparator::FindShortSuccessor(std::string*) const 