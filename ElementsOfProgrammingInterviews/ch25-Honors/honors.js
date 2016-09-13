// 25.40 - Test for arbitrage
function arbitrage(G) {
    var edges = G.edges;
    for(var edgeLinkedList of G) {
        for(var edge of edgeLinkedList) {
            edge.weight = -1 * Math.log(edge.weight);
        }
    }

    var distances = new Array(G.vertices.length).fill(Infinity);
    distances[0] = 0;

    for(var i = 0; i < G.vertices.length - 1; i++) {
        var haveUpdate = false;
        for(var j = 0; j < G.size(); j++) {
            for(var k = 0; k < G[j].size; k++) {
                if(distances[j] !== Infinity && distances[k] < distances[j] + G[j][k]) {
                    distances[j] = distances[i] + G[i][j];
                    haveUpdate = true;
                }
            }
        }

        if(!haveUpdate) return false; // no negative weight no arb
    }

    for(var i = 0; i < G.size(); i++) {
        for(var j = 0; j < G[i].size(); j++) { 
            if(distances[i] !== Infinity && distances[j] < distances[i] + G[i][j]) {
                return true;
            }
        }
    }

    return false;
}
