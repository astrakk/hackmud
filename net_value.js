function (context, args) {// from:"", to:""
	if(!args || !args.from || !args.to){
		return "Please remember to include !from! and !to! keys.";
	}
	
	var i = 0, spent = 0, earn = 0;
	var tr = #s.accts.transactions({count:"all"});
	var lib = #s.scripts.lib();
	var log = [];
	tr.reverse(i => i+1);
	for(i in tr){
		var time = lib.to_game_timestr(tr[i].time);
		var val = tr[i].amount;
		var gc = lib.to_gc_str(tr[i].amount);

		if(tr[i].memo){
			var memo = "`1[M]` ";
		} else {
			var memo = "    ";
		}

		if(time > args.from && time <= args.to){
			if(tr[i].sender == context.caller){
				spent = spent + val;
				log.push(memo + "`5" + time + "` `1-" + gc + "`");
			} else {
				log.push(memo + "`2" + time + "` `1+" + gc + "`");
				earn = earn + val;
			}
		}
			
	}
	log.push("\n`2Earned:` " + lib.to_gc_str(earn) + "\n`5Spent:`  " + lib.to_gc_str(spent) +"\n!Net!:    " + lib.to_gc_str(earn-spent) + " ");
	return log;
};
