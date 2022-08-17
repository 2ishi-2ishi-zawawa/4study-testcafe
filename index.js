const testcafe = require('testcafe');  // require しないと動かないので require する
const { Selector } = testcafe; //セレクタをtestcafeで使うものとして指定

testcafe.fixture`Getting Started`  // fixture は TestCafe の機能単位の指定機能となる
    .page`https://devexpress.github.io/testcafe/example`;  // fixture 単位で対象のページを

testcafe.test(
    'click',      // テスト名を指定する
    async t => {  // test の実処理を記載する。
                const checkLabel= Selector('label').withAttribute('for', 'reusing-js-code'); 
                //ラベル要素の指定※1
                const checkBox= Selector('label > input#reusing-js-code').withAttribute('type','checkbox'); 
                //チェックボックス要素の指定※2
        
                await t
                    .click(Selector(checkLabel))// ラベルをクリック
                    .expect(checkBox.checked).eql(true)//チェックボックスを確認(アサート)
                    .wait(5000)// 目視でも確認できるよう余裕持って5000ミリ秒wait入れてみた
    });