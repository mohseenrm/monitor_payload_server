//sample query builder
const queryBuilder = ( filters ) => {
	if( filters.type === 'dst' ){
		return `SELECT src_port, dst_port, "timestamp", payload, id, length
	FROM public.payloads where dst_port=${ filters.results[0] } order by id desc limit 100;`;
	}
	else{
		return `SELECT src_port, dst_port, "timestamp", payload, id, length
	FROM public.payloads where length=${ filters.results[0] } order by id desc limit 100;`;
	}
};


module.exports = queryBuilder;