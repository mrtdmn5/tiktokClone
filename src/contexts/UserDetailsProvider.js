import { createContext, useState } from "react";

export const userDetailsContext = createContext();
const postDetails = [
  {
    id: "p1",
    user: {
      id: "u1",
      username: "muratdumsan",
      imageUri:
        "https://rechtennieuws.nl/wp-content/uploads/2017/01/Murat-Duman-Houthoff-Buruma.jpg",
    },
    despcrition: "baurdaaad bir yazi",
    song: "nf-The search",
    sonImage: "",
    likes: 123,
    comments: 123,
    shares: 78,
    uri: "https://v16-webapp.tiktok.com/ecf7db109a23543d757aceac14c71a3c/6269d875/video/tos/useast2a/tos-useast2a-pve-0068/6f4d51ed959141a5bc2a33627ad274df/?a=1988&br=2820&bt=1410&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hy9Myq8ZNT2Ywe2Np~Tyl7Gb&l=202204271757180102230720352255F59C&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amZzbDQ6ZjtnPDMzNzczM0ApZTk4ZmhpNDw3Nzc6OWRnOWdmbjAtcjRfcWFgLS1kMTZzc2AzNDAtYTRgYDY1NTEyYy46Yw%3D%3D&vl=&vr=",
  },
  {
    id: "p2",
    user: {
      id: "u1",
      username: "bernakurnaz",
      imageUri:
        "https://rechtennieuws.nl/wp-content/uploads/2017/01/Murat-Duman-Houthoff-Buruma.jpg",
    },
    despcrition: "b2urdaaad bir yazi",
    song: "nf-The search",
    sonImage: "",
    likes: 123,
    comments: 123,
    shares: 78,
    uri: "https://v16-webapp.tiktok.com/1c6b288cb9112d12123523fda26fd20d/6269d882/video/tos/useast2a/tos-useast2a-ve-0068c001/e98828a5bd2944c78884222b2295f895/?a=1988&br=4454&bt=2227&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hy9Myq8ZoT2Ywe2NFAeyl7Gb&l=202204271757330102230830150D576FE9&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajV0N2Y6ZjR4PDMzNzczM0ApZGg5aGloNzw2N2ZnZTo2ZWctNTJhcjRnYzRgLS1kMTZzczIvNTAwYC5hYi42MC5jYTY6Yw%3D%3D&vl=&vr=",
  },
  {
    id: "p3",
    user: {
      id: "u1",
      username: "ahmet",
      imageUri:
        "https://rechtennieuws.nl/wp-content/uploads/2017/01/Murat-Duman-Houthoff-Buruma.jpg",
    },
    despcrition: "bu3rdaaad bir yazi",
    song: "nf-The search",
    sonImage: "",
    likes: 123,
    comments: 123,
    shares: 78,
    uri: "https://v16-webapp.tiktok.com/e21a8cf602ebd2a28a942857ca274e05/6269d1b8/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/21d6299b4b924525ace12b22009193ac/?a=1988&br=1820&bt=910&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hy9Myq8Zo39Ywe2NB-oyl7Gb&l=202204271728440101920531300D5017FC&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzU3ZjQ6ZnQ2PDMzZjgzM0ApPGk6ZmU1ZmRkN2c3NTZmZmdrNWNscjRnb2JgLS1kL2NzczIxXi5fYi0xYzVfYzItYV86Yw%3D%3D&vl=&vr=",
  },
  {
    id: "p4",
    user: {
      id: "u1",
      username: "mehmet",
      imageUri:
        "https://static.remove.bg/remove-bg-web/5cc729f2c60683544f035949b665ce17223fd2ec/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png",
    },
    despcrition: "burd4aaad bir yazi",
    song: "nf-The search",
    sonImage: "",
    likes: 123,
    comments: 123,
    shares: 78,
    uri: "https://v16-webapp.tiktok.com/72fe4e51727bc583e79383c6c9d9a003/6269ef68/video/tos/useast2a/tos-useast2a-ve-0068c002/2d154d17f8db44c7a01218151ff4fbca/?a=1988&br=1584&bt=792&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hy9Myq8Zzj_Ywe2NJS6yl7Gb&l=202204271932350102230850191367CC81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajw5NWQ6ZnBqPDMzNzczM0ApODc4OTQ3NmU1NzlnOWhpOGcyNGBycjRncGFgLS1kMTZzcy1gL2IvNS00Yl42L15jL2E6Yw%3D%3D&vl=&vr="  },
  {
    id: "p5",
    user: {
      id: "u1",
      username: "ali",
      imageUri:
        "https://rechtennieuws.nl/wp-content/uploads/2017/01/Murat-Duman-Houthoff-Buruma.jpg",
    },
    despcrition: "burd5aaad bir yazi",
    song: "nf-The search",
    sonImage: "",
    likes: 123,
    comments: 123,
    shares: 78,
    uri: "https://v16-webapp.tiktok.com/2dfb0979e49ad1dc2ac36d091e8ce3ee/6269d877/video/tos/useast2a/tos-useast2a-pve-0068/4b134a593606436fbc98aaa9ed597dcd/?a=1988&br=2984&bt=1492&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hy9Myq8ZoT2Ywe2NFAeyl7Gb&l=202204271757330102230830150D576FE9&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajM4bmc6ZjRnPDMzNzczM0ApZGZkZGYzaDxpN2Y3NmczZ2dgY25fcjQwaDFgLS1kMTZzc181LV8zNWM0NTItY181LV46Yw%3D%3D&vl=&vr=",
  },
];

const UserDetailsProvider = (props) => {
  const [userDetails, setUserDetails] = useState(postDetails);

  return (
    <userDetailsContext.Provider value={[userDetails, setUserDetails]}>
      {props.children}
    </userDetailsContext.Provider>
  );
};

export default UserDetailsProvider;
