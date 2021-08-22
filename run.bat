cd src
:loop
makeobj pak256

copy *.pak ..\..\simutrans_addon_dev\pak128
..\..\simutrans_addon_dev\simutrans.exe

goto loop