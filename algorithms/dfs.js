//regular binary tree
const dfs = (root) => {
  if (!root) {
    return;
  }

  let ans = 0;

  //some kind of logic

  dfs(root.left);
  dfs(root.right);
  return ans;
};

//graph dfs
//

const graphDfs = (graph) => {
  let innerDfs = (node) => {
    let ans = 0;
    //logic

    for (const neighbor of graph[node]) {
      if (!seen.has(neighbor)) {
        seen.add(neighbor);
        ans += dfs(neighbor);
      }
    }

    return ans;
  };

  let seen = new Set([START_NODE]);
  return dfs(START_NODE);
};
