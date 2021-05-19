import { mapGetters, mapActions } from 'vuex';
import { EventCard } from '@/components';
import debounce from '@/utils/debounce';

export default {
  name: 'Homepage',
  components: {
    EventCard,
  },
  data: () => ({
    isLoading: true,
  }),
  async mounted() {
    window.addEventListener('scroll', debounce((e) => this.handleScroll(e), 600));
    if (!this.allEvents) this.fetchEvents();
  },
  methods: {
    ...mapActions(['fetchEvents']),
    handleScroll() {
      // check current scrollLevel
      debugger;
      if (document.documentElement.scrollHeight - window.scrollY === window.innerHeight) {
        this.isLoading = !this.onLastPage;
        this.fetchEvents();
      }
    },
  },
  computed: {
    ...mapGetters(['allEvents', 'onLastPage']),
  },
  watch: {
    allEvents: {
      immediate: true,
      deep: true,
      handler(val) {
        if (val) {
          this.isLoading = false;
        }
      },
    },
  },
};
