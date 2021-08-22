@echo off
cd src
:loop
makeobj pak256 dev.pak

copy *.pak ..\..\simutrans_addon_dev\pak128
..\..\simutrans_addon_dev\simutrans.exe

echo continue?
pause
goto loop