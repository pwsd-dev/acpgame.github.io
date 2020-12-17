module.exports = {
	columns: 6,
	offset: "0px",
	//mobileFirst: true,
	container: {
        maxWidth: "1248px",
        fields: "90px"
    },
	breakPoints: {
		mmd: {
            width: "1200px"
        },
		md: {
            width: "1024px"
        },
        smm: {
            width: "992px"
        },
        sm: {
            width: "768px",
            fields: "50px"
        },
        xs: {
            width: "620px",
            fields: "30px"

        },
        xxs: {
            width: "360px",
            /*
            offset: "10px",
            fields: "5px"
            */
        }
	},
    //detailedCalc: true
};