/*
JSON is automatically included with each app.

Use the $fh.ready() (http://docs.feedhenry.com/wiki/Ready) function to trigger 
loading the local config and binding a click event to invoke the cloud action 
call which will return the remote config.
*/

$fh.ready(function() {
  document.getElementById('list_button').onclick = function() {

  $fh.act(
    {
      act:'list'
    },
    function(res) {
      document.getElementById('Results').innerHTML = JSON.stringify(res);
    },
    function(code,errorprops,params) {
      console.log('An error occured: ' + code + ' : ' + errorprops.error);
      document.getElementById('Results').innerHTML = 'An error occured: ' + code + ' : ' + errorprops.error;
    }
  );
};

  document.getElementById('deleteall_button').onclick = function() {

  $fh.act(
    {
      act:'deleteall'
    },
    function(res) {
      document.getElementById('Results').innerHTML = JSON.stringify(res);
    },
    function(code,errorprops,params) {
      console.log('An error occured: ' + code + ' : ' + errorprops.error);
      document.getElementById('Results').innerHTML = 'An error occured: ' + code + ' : ' + errorprops.error;
    }
  );
};

  document.getElementById('list_lastname_button').onclick = function() {

  $fh.act(
    {
      act:'listLastName'
    },
    function(res) {
      document.getElementById('Results').innerHTML = JSON.stringify(res);
    },
    function(code,errorprops,params) {
      console.log('An error occured: ' + code + ' : ' + errorprops.error);
      document.getElementById('Results').innerHTML = 'An error occured: ' + code + ' : ' + errorprops.error;
    }
  );
};


  document.getElementById('addjim_button').onclick = function() {

  $fh.act(
    {
      act:'addMrJones'
    },
    function(res) {
      document.getElementById('Results').innerHTML = JSON.stringify(res);
    },
    function(code,errorprops,params) {
      console.log('An error occured: ' + code + ' : ' + errorprops.error);
      document.getElementById('Results').innerHTML = 'An error occured: ' + code + ' : ' + errorprops.error;
    }
  );
};

  document.getElementById('addjack_button').onclick = function() {

  $fh.act(
    {
      act:'addMrSmith'
    },
    function(res) {
      document.getElementById('Results').innerHTML = JSON.stringify(res);
    },
    function(code,errorprops,params) {
      console.log('An error occured: ' + code + ' : ' + errorprops.error);
      document.getElementById('Results').innerHTML = 'An error occured: ' + code + ' : ' + errorprops.error;
    }
  );
};



});