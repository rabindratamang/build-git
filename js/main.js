(function(){

    /**
     *
     *
     * @param {string} name
     */
    function Git(name){
        this.name = name;
        this.lastCommitId = -1;
        this.HEAD = null; //pointer to the last commit 
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
     * @param {string} message
     * @returns
     */
    Git.prototype.commit = function(message){
        var commit = new Commit(++this.lastCommitId, this.HEAD, message);
        this.HEAD = commit;
        return commit;
    }

    /**
     * @returns {Array}
     */
    Git.prototype.log = function(){
            var history = [];
            return history;
    }

    //expose Git to window to access globally
    window.Git = Git;

})();