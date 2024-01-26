<template>
  <div class="container">
    <h1>Methodes vs watchers vs props computed</h1>
    <div class="col">
      <span>Methods</span>
      <input
        type="text"
        placeholder="chercher avec methods"
        v-model="input"
        @keyup="searchMethod"
      />
      
      <ul>
        <li v-for="(item, i) in methodFilterList" :key="i">{{ item }}</li>
      </ul>
      <br />
    </div>
    <div class="col">
      <span>Computed</span>
      <ul>
        <li v-for="(item, i) in computedList" :key="i">{{ item }}</li>
      </ul>
    </div>
    <div class="col">
      <span>Watchers</span>
      <ul>
        <li v-for="(item, i) in watchFilterList" :key="i">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      frameworkList: [
        "JavaScript",
        "HTML",
        "CSS",
        "PHP",
        "Python",
        "Java",
        "C++",
        "C",
        "SQL",
        "NoSQL",
        "MongoDB",
        "MySQL",
        "PostgreSQL",
        "Elasticsearch",
        "Solr",
        "Redis",
        "Kubernetes",
        "Docker",
        "AWS",
        "Azure",
        "GCP",
        "DevOps",
        "Agile",
        "Scrum",
        "Kanban",
        "UX/UI",
        "UI/UX",
        "IA",
        "Machine Learning",
        "Deep Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Robotics",
        "Blockchain",
        "Web3",
        "NFT",
        "Metaverse",
        "Cybersécurité",
        "Big Data",
        "Data Science",
        "Data Analytics",
        "Machine Learning Engineer",
        "Data Scientist",
        "Data Analyst",
        "DevOps Engineer",
        "Software Engineer",
        "Web Developer",
        "Mobile Developer",
        "Full-Stack Developer",
        "Back-End Developer",
        "Front-End Developer",
        "UI Designer",
        "UX Designer",
        "Product Manager",
        "Project Manager",
        "Business Analyst",
        "QA Engineer",
        "DevOps Engineer",
        "SRE",
        "MLOps",
        "DataOps",
        "Cloud Engineer",
        "Security Engineer",
        "Cybersecurity Engineer",
        "IT Architect",
        "Systems Administrator",
        "Network Administrator",
        "Database Administrator",
        "Webmaster",
        "SEO",
        "SEM",
        "SMO",
        "SEMrush",
        "Ahrefs",
        "MOZ",
        "Google Analytics",
        "Google Ads",
        "Facebook Ads",
        "Instagram Ads",
        "TikTok Ads",
        "Twitter Ads",
        "LinkedIn Ads",
        "YouTube Ads",
        "Gmail",
        "Google Drive",
        "Google Docs",
        "Google Sheets",
        "Google Slides",
        "Google Calendar",
        "Google Meet",
        "Google Chat",
        "Google Search",
        "Google Maps",
        "Google Chrome",
        "Google Play",
        "Android",
        "iOS",
        "macOS",
        "Windows",
        "Linux",
      ],
      input: "",
      methodFilterList: [],
      watchFilterList: [],
      input2: "",
      input3: ""
    };
  },
  created() {
    this.searchMethod();
  },
  methods: {
    searchMethod() {
      this.methodFilterList = this.frameworkList.filter((item) =>
        item.toLowerCase().includes(this.input.toLowerCase())
      );
    },
  },
  computed: {
    computedList() {
      return this.frameworkList.filter((item) =>
        item.toLowerCase().includes(this.input.toLowerCase())
      );
    },
  },
  watch: {
    input: {
      handler() {
        this.watchFilterList = this.frameworkList.filter((item) =>
        item.toLowerCase().includes(this.input.toLowerCase()))
      },
      immediate: true
    }
  }
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  padding: 30px;
  max-width: 600px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
.col {
  width: 33%;
  height: 100%;
  float: left;
}
input {
  padding: 10px 6px;
  margin: 20px 10px 10px 0;
}
</style>
