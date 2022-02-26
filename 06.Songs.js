function solve(array){
    let n = Number(array.shift())
    let songs = []

    class Song {
        constructor(typelist,name,duration){
            this.typelist = typelist
            this.name = name
            this.duration = duration
        }
    }

    for (let i = 0; i < n; i++) {
        let songArr = array[i].split("_")
        songs.push(new Song(songArr[0],songArr[1],songArr[2]))
    }
    let playlist = array[n]

    if(playlist === "all"){
        for (const iterator of songs) {
            let value = Object.values(iterator)
            console.log(value[1])

        }
    }else{
        for (let element of songs) {
            let value = Object.values(element)
            if (value[0]==playlist){
                console.log(value[1])
            }
        }
    }
    
}
solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
    )