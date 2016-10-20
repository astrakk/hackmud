function (context, args) {// from:"", to:""
	if(!args || !args.from || !args.to){
		return "Please remember to include !from! and !to! keys."	
	}
	var lib = #s.scripts.lib();
	var tr = #s.accts.transactions({count:"all"});
	var i, time, val, valgc;
	var memo;
	var spent = 0, earn = 0, net = 0;
	var log = [];
	log.push("Range from: " + args.from + "\nRange to: " + args.to + "\n")
	tr.reverse(i => i+1)
	for(i in tr){
		memo = "   ";
		time = lib.to_game_timestr(tr[i].time);
		val = tr[i].amount;
		valgc = lib.to_gc_str(val);
		if(time > args.from && time <= args.to){
			if(tr[i].sender == context.caller){
				if(tr[i].memo){memo = "`1[M]`";}
				spent = spent+val;
				net = net-val;
				log.push(memo + " `5" + time + "` `1-" + valgc + "`");
			} else if(tr[i].sender != context.caller){
				if(tr[i].memo){memo = "`1[M]`";}
				earn = spent+val;
				net = net+val;
				log.push(memo + " `2" + time + "` `1+" + valgc + "`");
			}
		}
	}
	spent = lib.to_gc_str(spent)
	earn = lib.to_gc_str(earn)
	net = lib.to_gc_str(net)
	log.push("\n`5Spent total:` " + spent + "\n`2Earned total:` " + earn + "\n!Net! !total!: " + net + " ")
	return log;
};
