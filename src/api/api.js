const apiUrl = 'http://musicapi.duapp.com/api.php'
const apiUrl2 = 'https://api.imjad.cn/cloudmusic'
export default{
	getMusicListUrl(cat,offset,limit){
		return apiUrl + '?type=topPlayList&cat=' + cat + '&offset=' + offset + '&limit=' + limit;
	},
	getMusicDetailList(id){
		return apiUrl2 + '?type=playlist&id=' + id;
	},
	getSong(id){
		return apiUrl + '?type=url&id=' + id;
	},
	getSearchList(cat){
		return apiUrl2 + '?type=search&s=' + cat;
	}
}
