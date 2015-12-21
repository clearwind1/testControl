/**
 * Created by pior on 15/12/10.
 */
var testGame = (function () {
    function testGame() {
    }
    var __egretProto__ = testGame.prototype;
    __egretProto__.getnumber = function () {
        return Math.random();
    };
    testGame.getInstance = function () {
        if (this.instance == null) {
            this.instance = new testGame();
        }
        return this.instance;
    };
    testGame.instance = null;
    return testGame;
})();
testGame.prototype.__class__ = "testGame";
