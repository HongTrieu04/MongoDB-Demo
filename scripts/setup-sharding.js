sh.addShard("shard1ReplSet/shard1:27018");
sh.addShard("shard2ReplSet/shard2:27017");
sh.enableSharding("myDatabase");
sh.shardCollection("myDatabase.myCollection", { _id: "hashed" });
