const apiUrl = 'http://musicapi.duapp.com/api.php'
export default{
	getMusicListUrl(cat,offset,limit){
		return apiUrl + '?type=topPlayList&cat=' + cat + '&offset=' + offset + '&limit=' + limit
	}
}
