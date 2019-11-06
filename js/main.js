function Git(name){
    this.name = name;
    this.lastCommitId = -1;
}

function Commit(id,message) {
    this.id = id;
    this.message = message;
    // Assume that 'this' has a 'change' property too.
}

Git.prototype.commit = function(message){
    var commit = new Commit(++this.lastCommitId,message);
    return commit;
}