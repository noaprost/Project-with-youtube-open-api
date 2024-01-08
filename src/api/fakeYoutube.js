import axios from "axios";

export default class FakeYoutube {
  constructor() {}

  async search(keyword) {
    return keyword ? this.#searchByKeyword() : this.#mostPopular();
  }

  // js에서 함수 이름 앞에 #이 붙으면 클래스 내부함수라는 뜻
  async #searchByKeyword() {
    return axios
      .get(`/data/search.json`)
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async #mostPopular() {
    return axios.get(`/data/popular.json`).then((res) => res.data.items);
  }
}
