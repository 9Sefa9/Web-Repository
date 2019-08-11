
var input = document.getElementById( 'uploadSelect' );
	
var label	 = input.nextElementSibling,
	labelVal = label.innerHTML;

var uploadList = document.querySelector(".uploadList");
	
	input.addEventListener( 'change', function( e )
	{
		uploadList.innerHTML="";
		if( this.files && this.files.length > 1 ){
			
			//anzeigen wie ivele elemente angewöhlt!
			fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
			label.querySelector('span').innerHTML = fileName;

			for(var i = 0; i<this.files.length;i++){
				var ul = document.querySelector(".uploadList");
				  var li = document.createElement("li");
				  li.appendChild(document.createTextNode(this.files[i].name));
				  ul.appendChild(li);
			}
		}else{
			fileName = e.target.value.split( '\\' ).pop();
			if( fileName ) 
				label.querySelector('span').innerHTML = fileName;
			else 
				label.innerHTML = labelVal;
		}
			
	});