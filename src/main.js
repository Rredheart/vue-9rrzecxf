<template>
  <!-- Önceki template kısmı aynı kalacak -->
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';

// Veri Modelleri
interface AnxietyRecord {
  id: number;
  level: number;
  date: string;
  notes?: string;
}

interface MoodRecord {
  id: number;
  mood: string;
  date: string;
  notes?: string;
}

interface ActivityRecord {
  id: number;
  type: string;
  duration: number;
  date: string;
  notes?: string;
}

// Uygulama State
const anxietyRecords = ref<AnxietyRecord[]>([
  { id: 1, level: 5, date: '2025-04-01T10:00:00', notes: 'Sabah kaygısı' },
  { id: 2, level: 3, date: '2025-04-01T15:30:00' },
  { id: 3, level: 7, date: '2025-04-02T09:15:00', notes: 'Toplantı öncesi' }
]);

const moodRecords = ref<MoodRecord[]>([
  { id: 1, mood: 'happy', date: '2025-04-01T12:00:00' },
  { id: 2, mood: 'anxious', date: '2025-04-02T08:00:00', notes: 'Uykusuzluk' }
]);

const activityRecords = ref<ActivityRecord[]>([
  { id: 1, type: 'meditation', duration: 10, date: '2025-04-01T07:30:00' },
  { id: 2, type: 'walking', duration: 20, date: '2025-04-02T18:45:00' }
]);

// Form State
const anxietyLevel = ref(5);
const anxietyNotes = ref('');
const selectedMood = ref('normal');
const moodNotes = ref('');
const activityType = ref('meditation');
const activityDuration = ref(15);
const activityNotes = ref('');

// Chart Refs
const anxietyChartContainer = ref<HTMLElement | null>(null);
const moodChartContainer = ref<HTMLElement | null>(null);
const meditationChartContainer = ref<HTMLElement | null>(null);
const breathingChartContainer = ref<HTMLElement | null>(null);
const trendsChartContainer = ref<HTMLElement | null>(null);

// Chart Instances
let anxietyChart: echarts.ECharts | null = null;
let moodChart: echarts.ECharts | null = null;
let meditationChart: echarts.ECharts | null = null;
let breathingChart: echarts.ECharts | null = null;
let trendsChart: echarts.ECharts | null = null;

// Kayıt Ekleme Fonksiyonları
const saveAnxietyRecord = () => {
  const newRecord: AnxietyRecord = {
    id: Date.now(),
    level: anxietyLevel.value,
    date: new Date().toISOString(),
    notes: anxietyNotes.value
  };
  anxietyRecords.value.push(newRecord);
  updateCharts();
  resetAnxietyForm();
};

const saveMoodRecord = () => {
  const newRecord: MoodRecord = {
    id: Date.now(),
    mood: selectedMood.value,
    date: new Date().toISOString(),
    notes: moodNotes.value
  };
  moodRecords.value.push(newRecord);
  updateCharts();
  resetMoodForm();
};

const saveActivityRecord = () => {
  const newRecord: ActivityRecord = {
    id: Date.now(),
    type: activityType.value,
    duration: activityDuration.value,
    date: new Date().toISOString(),
    notes: activityNotes.value
  };
  activityRecords.value.push(newRecord);
  updateCharts();
  resetActivityForm();
};

// Form Resetleme
const resetAnxietyForm = () => {
  anxietyLevel.value = 5;
  anxietyNotes.value = '';
};

const resetMoodForm = () => {
  selectedMood.value = 'normal';
  moodNotes.value = '';
};

const resetActivityForm = () => {
  activityType.value = 'meditation';
  activityDuration.value = 15;
  activityNotes.value = '';
};

// Grafikleri Başlatma
onMounted(() => {
  initAnxietyChart();
  initMoodChart();
  initMeditationChart();
  initBreathingChart();
  initTrendsChart();
  
  window.addEventListener('resize', () => {
    anxietyChart?.resize();
    moodChart?.resize();
    meditationChart?.resize();
    breathingChart?.resize();
    trendsChart?.resize();
  });
});

// Kaygı Grafiği
const initAnxietyChart = () => {
  if (anxietyChartContainer.value) {
    anxietyChart = echarts.init(anxietyChartContainer.value);
    updateAnxietyChart();
  }
};

const updateAnxietyChart = () => {
  if (!anxietyChart) return;
  
  const last7Records = [...anxietyRecords.value]
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(-7);
  
  const dates = last7Records.map(record => 
    new Date(record.date).toLocaleDateString('tr-TR', { weekday: 'short' })
  );
  
  const levels = last7Records.map(record => record.level);
  
  const option = {
    color: ['#818cf8'],
    tooltip: {
      trigger: 'axis',
      formatter: '{b}: {c}'
    },
    xAxis: {
      type: 'category',
      data: dates,
      axisLabel: { color: '#666' }
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 10,
      axisLabel: { color: '#666' }
    },
    series: [{
      name: 'Kaygı Seviyesi',
      type: 'line',
      smooth: true,
      data: levels,
      areaStyle: { opacity: 0.2 },
      lineStyle: { width: 3 },
      symbol: 'circle',
      symbolSize: 8
    }]
  };
  
  anxietyChart.setOption(option);
};

// Ruh Hali Grafiği
const initMoodChart = () => {
  if (moodChartContainer.value) {
    moodChart = echarts.init(moodChartContainer.value);
    updateMoodChart();
  }
};

const updateMoodChart = () => {
  if (!moodChart) return;
  
  const moodCounts = {
    happy: moodRecords.value.filter(m => m.mood === 'happy').length,
    calm: moodRecords.value.filter(m => m.mood === 'calm').length,
    normal: moodRecords.value.filter(m => m.mood === 'normal').length,
    anxious: moodRecords.value.filter(m => m.mood === 'anxious').length,
    sad: moodRecords.value.filter(m => m.mood === 'sad').length
  };
  
  const option = {
    color: ['#10b981', '#3b82f6', '#eab308', '#f97316', '#ef4444'],
    series: [{
      type: 'pie',
      radius: ['40%', '70%'],
      data: [
        { value: moodCounts.happy, name: 'Mutlu' },
        { value: moodCounts.calm, name: 'Sakin' },
        { value: moodCounts.normal, name: 'Normal' },
        { value: moodCounts.anxious, name: 'Endişeli' },
        { value: moodCounts.sad, name: 'Üzgün' }
      ]
    }]
  };
  
  moodChart.setOption(option);
};

// Meditasyon İlerleme Grafiği
const initMeditationChart = () => {
  if (meditationChartContainer.value) {
    meditationChart = echarts.init(meditationChartContainer.value);
    updateMeditationChart();
  }
};

const updateMeditationChart = () => {
  if (!meditationChart) return;
  
  const meditationMinutes = activityRecords.value
    .filter(a => a.type === 'meditation')
    .reduce((sum, a) => sum + a.duration, 0);
  
  const progress = Math.min(100, (meditationMinutes / 160) * 100);
  
  const option = {
    series: [{
      type: 'pie',
      radius: ['80%', '100%'],
      data: [
        { value: progress, name: 'Completed', itemStyle: { color: '#818cf8' } },
        { value: 100 - progress, name: 'Remaining', itemStyle: { color: '#e0e7ff' } }
      ]
    }]
  };
  
  meditationChart.setOption(option);
};

// Grafik Güncelleme
const updateCharts = () => {
  updateAnxietyChart();
  updateMoodChart();
  updateMeditationChart();
  updateBreathingChart();
  updateTrendsChart();
};
</script>

<style scoped>
/* Önceki stil tanımları aynı kalacak */
</style>