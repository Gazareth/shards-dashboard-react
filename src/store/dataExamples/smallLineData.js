const datas = [
	[1, 2, 1, 3, 5, 4, 7],
	[1, 2, 3, 3, 3, 4, 4],
	[2, 3, 3, 3, 4, 3, 3],
	[1, 7, 1, 3, 1, 4, 8],
	[3, 2, 3, 2, 4, 5, 4],
	new Array(7).fill(Math.round(Math.random())),
]

const makeData = (idx,bgColor,bdrColor)=>{
	return [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: bgColor,
          borderColor: bdrColor,
          data: datas[idx]
        }
      ]
}

export default makeData;