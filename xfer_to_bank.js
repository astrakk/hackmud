function (context, args) {
	if (!args || !args.user){
		return "Please specify which +user+ to transfer to with the !user! key."
	}
	if (!args || !args.confirm == true) {
		return "THIS SCRIPT WILL TRANSFER ALL GC FROM YOUR ACCOUNT. Please run with confirm:true to continue."
	}
	var gc = #s.accts.balance();
	if(gc != 0) {
		#s.accts.xfer_gc_to({to:args.user, amount:gc})
	} else {
		return "Account already empty."
	}
}