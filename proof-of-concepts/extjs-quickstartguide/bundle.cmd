SET CURRENT=%CD%
SET YUICOMPRESSOR=%CURRENT%/"../tools/bundle/yui/yuicompressor-2.4.6.jar"
pushd "../../packages/tools/bundle/yui"
md build
java -jar %YUICOMPRESSOR% --charset UTF-8 --line-break 4096 --type js bundle.js > build/bundle-yui.js
echo /* This is a packed Oskari bundle (bundle script version Thu May 31 2012 11:32:12 GMT+0300 (Suomen kesäaika)) */ > build/yui.js
echo /* This is a unpacked Oskari bundle (bundle script version Thu May 31 2012 11:32:12 GMT+0300 (Suomen kesäaika)) */ > build/yui-pack.js
type "yui.js" >> build/yui-pack.js
java -jar %YUICOMPRESSOR% --charset UTF-8 --line-break 4096 --type js build/yui-pack.js >> build/yui.js
echo /* This is a unpacked Oskari bundle (bundle script version Thu May 31 2012 11:32:12 GMT+0300 (Suomen kesäaika)) */ > build/yui-pack-locale-fi.js
echo /* This is a unpacked Oskari bundle (bundle script version Thu May 31 2012 11:32:12 GMT+0300 (Suomen kesäaika)) */ > build/yui-pack-locale-sv.js
echo /* This is a unpacked Oskari bundle (bundle script version Thu May 31 2012 11:32:12 GMT+0300 (Suomen kesäaika)) */ > build/yui-pack-locale-en.js
java -jar %YUICOMPRESSOR% --charset UTF-8 --line-break 4096 --type js build/yui-pack-locale-fi.js >> build/yui-locale-fi.js
java -jar %YUICOMPRESSOR% --charset UTF-8 --line-break 4096 --type js build/yui-pack-locale-sv.js >> build/yui-locale-sv.js
java -jar %YUICOMPRESSOR% --charset UTF-8 --line-break 4096 --type js build/yui-pack-locale-en.js >> build/yui-locale-en.js
popd
pushd "../../proof-of-concepts/extjs/bundle/flyoutadapter"
md build
java -jar %YUICOMPRESSOR% --charset UTF-8 --line-break 4096 --type js bundle.js > build/bundle-yui.js
echo /* This is a packed Oskari bundle (bundle script version Thu May 31 2012 11:32:12 GMT+0300 (Suomen kesäaika)) */ > build/yui.js
echo /* This is a unpacked Oskari bundle (bundle script version Thu May 31 2012 11:32:12 GMT+0300 (Suomen kesäaika)) */ > build/yui-pack.js
type "instance.js" >> build/yui-pack.js
type "Flyout.js" >> build/yui-pack.js
type "Tile.js" >> build/yui-pack.js
type "Extension.js" >> build/yui-pack.js
type "ui\manager\flyout-ui-facade.js" >> build/yui-pack.js
java -jar %YUICOMPRESSOR% --charset UTF-8 --line-break 4096 --type js build/yui-pack.js >> build/yui.js
echo /* This is a unpacked Oskari bundle (bundle script version Thu May 31 2012 11:32:12 GMT+0300 (Suomen kesäaika)) */ > build/yui-pack-locale-fi.js
echo /* This is a unpacked Oskari bundle (bundle script version Thu May 31 2012 11:32:12 GMT+0300 (Suomen kesäaika)) */ > build/yui-pack-locale-sv.js
echo /* This is a unpacked Oskari bundle (bundle script version Thu May 31 2012 11:32:12 GMT+0300 (Suomen kesäaika)) */ > build/yui-pack-locale-en.js
java -jar %YUICOMPRESSOR% --charset UTF-8 --line-break 4096 --type js build/yui-pack-locale-fi.js >> build/yui-locale-fi.js
java -jar %YUICOMPRESSOR% --charset UTF-8 --line-break 4096 --type js build/yui-pack-locale-sv.js >> build/yui-locale-sv.js
java -jar %YUICOMPRESSOR% --charset UTF-8 --line-break 4096 --type js build/yui-pack-locale-en.js >> build/yui-locale-en.js
popd
pushd "../../samples/quickstartguide/bundle/positioninfo"
md build
java -jar %YUICOMPRESSOR% --charset UTF-8 --line-break 4096 --type js bundle.js > build/bundle-yui.js
echo /* This is a packed Oskari bundle (bundle script version Thu May 31 2012 11:32:12 GMT+0300 (Suomen kesäaika)) */ > build/yui.js
echo /* This is a unpacked Oskari bundle (bundle script version Thu May 31 2012 11:32:12 GMT+0300 (Suomen kesäaika)) */ > build/yui-pack.js
type "instance.js" >> build/yui-pack.js
type "ui.js" >> build/yui-pack.js
java -jar %YUICOMPRESSOR% --charset UTF-8 --line-break 4096 --type js build/yui-pack.js >> build/yui.js
echo /* This is a unpacked Oskari bundle (bundle script version Thu May 31 2012 11:32:12 GMT+0300 (Suomen kesäaika)) */ > build/yui-pack-locale-fi.js
echo /* This is a unpacked Oskari bundle (bundle script version Thu May 31 2012 11:32:12 GMT+0300 (Suomen kesäaika)) */ > build/yui-pack-locale-sv.js
echo /* This is a unpacked Oskari bundle (bundle script version Thu May 31 2012 11:32:12 GMT+0300 (Suomen kesäaika)) */ > build/yui-pack-locale-en.js
java -jar %YUICOMPRESSOR% --charset UTF-8 --line-break 4096 --type js build/yui-pack-locale-fi.js >> build/yui-locale-fi.js
java -jar %YUICOMPRESSOR% --charset UTF-8 --line-break 4096 --type js build/yui-pack-locale-sv.js >> build/yui-locale-sv.js
java -jar %YUICOMPRESSOR% --charset UTF-8 --line-break 4096 --type js build/yui-pack-locale-en.js >> build/yui-locale-en.js
popd
pushd "../../samples/quickstartguide/bundle/wikipedia"
md build
java -jar %YUICOMPRESSOR% --charset UTF-8 --line-break 4096 --type js bundle.js > build/bundle-yui.js
echo /* This is a packed Oskari bundle (bundle script version Thu May 31 2012 11:32:12 GMT+0300 (Suomen kesäaika)) */ > build/yui.js
echo /* This is a unpacked Oskari bundle (bundle script version Thu May 31 2012 11:32:12 GMT+0300 (Suomen kesäaika)) */ > build/yui-pack.js
type "ui.js" >> build/yui-pack.js
type "instance.js" >> build/yui-pack.js
java -jar %YUICOMPRESSOR% --charset UTF-8 --line-break 4096 --type js build/yui-pack.js >> build/yui.js
echo /* This is a unpacked Oskari bundle (bundle script version Thu May 31 2012 11:32:12 GMT+0300 (Suomen kesäaika)) */ > build/yui-pack-locale-fi.js
echo /* This is a unpacked Oskari bundle (bundle script version Thu May 31 2012 11:32:12 GMT+0300 (Suomen kesäaika)) */ > build/yui-pack-locale-sv.js
echo /* This is a unpacked Oskari bundle (bundle script version Thu May 31 2012 11:32:12 GMT+0300 (Suomen kesäaika)) */ > build/yui-pack-locale-en.js
java -jar %YUICOMPRESSOR% --charset UTF-8 --line-break 4096 --type js build/yui-pack-locale-fi.js >> build/yui-locale-fi.js
java -jar %YUICOMPRESSOR% --charset UTF-8 --line-break 4096 --type js build/yui-pack-locale-sv.js >> build/yui-locale-sv.js
java -jar %YUICOMPRESSOR% --charset UTF-8 --line-break 4096 --type js build/yui-pack-locale-en.js >> build/yui-locale-en.js
popd
pushd "../../samples/quickstartguide/bundle/trains"
md build
java -jar %YUICOMPRESSOR% --charset UTF-8 --line-break 4096 --type js bundle.js > build/bundle-yui.js
echo /* This is a packed Oskari bundle (bundle script version Thu May 31 2012 11:32:12 GMT+0300 (Suomen kesäaika)) */ > build/yui.js
echo /* This is a unpacked Oskari bundle (bundle script version Thu May 31 2012 11:32:12 GMT+0300 (Suomen kesäaika)) */ > build/yui-pack.js
type "instance.js" >> build/yui-pack.js
type "ui.js" >> build/yui-pack.js
java -jar %YUICOMPRESSOR% --charset UTF-8 --line-break 4096 --type js build/yui-pack.js >> build/yui.js
echo /* This is a unpacked Oskari bundle (bundle script version Thu May 31 2012 11:32:12 GMT+0300 (Suomen kesäaika)) */ > build/yui-pack-locale-fi.js
echo /* This is a unpacked Oskari bundle (bundle script version Thu May 31 2012 11:32:12 GMT+0300 (Suomen kesäaika)) */ > build/yui-pack-locale-sv.js
echo /* This is a unpacked Oskari bundle (bundle script version Thu May 31 2012 11:32:12 GMT+0300 (Suomen kesäaika)) */ > build/yui-pack-locale-en.js
java -jar %YUICOMPRESSOR% --charset UTF-8 --line-break 4096 --type js build/yui-pack-locale-fi.js >> build/yui-locale-fi.js
java -jar %YUICOMPRESSOR% --charset UTF-8 --line-break 4096 --type js build/yui-pack-locale-sv.js >> build/yui-locale-sv.js
java -jar %YUICOMPRESSOR% --charset UTF-8 --line-break 4096 --type js build/yui-pack-locale-en.js >> build/yui-locale-en.js
popd
md build
echo /* This is a packed Oskari app (bundle script version Thu May 31 2012 11:32:12 GMT+0300 (Suomen kesäaika)) */ > build/yui-app.js
type "..\..\packages\tools\bundle\yui\build\yui.js" >> build/yui-app.js
type "..\..\proof-of-concepts\extjs\bundle\flyoutadapter\build\yui.js" >> build/yui-app.js
type "..\..\samples\quickstartguide\bundle\positioninfo\build\yui.js" >> build/yui-app.js
type "..\..\samples\quickstartguide\bundle\wikipedia\build\yui.js" >> build/yui-app.js
type "..\..\samples\quickstartguide\bundle\trains\build\yui.js" >> build/yui-app.js
echo /* This is a packed Oskari locale for app (bundle script version Thu May 31 2012 11:32:12 GMT+0300 (Suomen kesäaika)) */ > build/yui-app-locale-fi.js
type "..\..\packages\tools\bundle\yui\build\yui-locale-fi.js" >> build/yui-app-locale-fi.js
type "..\..\proof-of-concepts\extjs\bundle\flyoutadapter\build\yui-locale-fi.js" >> build/yui-app-locale-fi.js
type "..\..\samples\quickstartguide\bundle\positioninfo\build\yui-locale-fi.js" >> build/yui-app-locale-fi.js
type "..\..\samples\quickstartguide\bundle\wikipedia\build\yui-locale-fi.js" >> build/yui-app-locale-fi.js
type "..\..\samples\quickstartguide\bundle\trains\build\yui-locale-fi.js" >> build/yui-app-locale-fi.js
echo /* This is a packed Oskari locale for app (bundle script version Thu May 31 2012 11:32:12 GMT+0300 (Suomen kesäaika)) */ > build/yui-app-locale-sv.js
type "..\..\packages\tools\bundle\yui\build\yui-locale-sv.js" >> build/yui-app-locale-sv.js
type "..\..\proof-of-concepts\extjs\bundle\flyoutadapter\build\yui-locale-sv.js" >> build/yui-app-locale-sv.js
type "..\..\samples\quickstartguide\bundle\positioninfo\build\yui-locale-sv.js" >> build/yui-app-locale-sv.js
type "..\..\samples\quickstartguide\bundle\wikipedia\build\yui-locale-sv.js" >> build/yui-app-locale-sv.js
type "..\..\samples\quickstartguide\bundle\trains\build\yui-locale-sv.js" >> build/yui-app-locale-sv.js
echo /* This is a packed Oskari locale for app (bundle script version Thu May 31 2012 11:32:12 GMT+0300 (Suomen kesäaika)) */ > build/yui-app-locale-en.js
type "..\..\packages\tools\bundle\yui\build\yui-locale-en.js" >> build/yui-app-locale-en.js
type "..\..\proof-of-concepts\extjs\bundle\flyoutadapter\build\yui-locale-en.js" >> build/yui-app-locale-en.js
type "..\..\samples\quickstartguide\bundle\positioninfo\build\yui-locale-en.js" >> build/yui-app-locale-en.js
type "..\..\samples\quickstartguide\bundle\wikipedia\build\yui-locale-en.js" >> build/yui-app-locale-en.js
type "..\..\samples\quickstartguide\bundle\trains\build\yui-locale-en.js" >> build/yui-app-locale-en.js