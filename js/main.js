(function(){

    /**
     *
     *
     * @param {string} name
     */
    function Git(name){
        this.name = name;
        this.lastCommitId = -1;
        this.branches = [];
        var master = new Branch("master", null);
        this.branches.push(master);
        this.HEAD = master; //pointer to the last commit now points to current branch 
    }

    /**
     *
     *
     * @param {number} id
     * @param {Commit} parent
     * @param {string} message
     */
    function Commit(id, parent, message) {
        this.id = id;
        this.parent = parent;//linked list data structure
        this.message = message;
        // Assume that 'this' has a 'change' property too.
    }

    /**
     *
     *
     * @param {string} name
     * @param {Commit} commit
     */
    function Branch(name, commit){
        this.name = name;
        this.commit = commit;
    }

    /**
     *
     *
     * @param {string} message
     * @returns
     */
    Git.prototype.commit = function(message){
        var commit = new Commit(++this.lastCommitId, this.HEAD.commit, message);
        // this.HEAD = commit; //update head no longer reference commit but the current branches
        this.HEAD.commit = commit;

        return commit;
    }

    /**
     * @returns {Array}
     */
    Git.prototype.log = function(){
            var history = [];
            var commit = this.HEAD.commit;

            while(commit){
                history.push(commit);
                commit = commit.parent;
            }
            return history;
    }

    /**
     *
     *
     * @param {string} branchName
     */
    Git.prototype.checkout = function(branchName){
        for (var i = this.branches.length; i--; ) {
            if (this.branches[i].name === branchName) {
              console.log("Switched to existing branch: " + branchName);
              this.HEAD = this.branches[i];
              return this;
            }
          }

        //if no branches found create newone
        var newBranch = new Branch(branchName, this.HEAD.commit);
        this.branches.push(newBranch);
        this.HEAD = newBranch;
        console.log("Switched to new branch: " + branchName);
        return this;
    }

    //expose Git to window to access globally
    window.Git = Git;

})();