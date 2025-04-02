<!-- The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work. -->
<template>
<div class="bg-gray-50 min-h-screen pb-16">
<!-- Add Modal -->
<div v-if="showAddModal" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
<div class="bg-white rounded-xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
<div class="p-4 border-b border-gray-200">
<div class="flex justify-between items-center">
<h3 class="text-lg font-semibold text-gray-800">Yeni Kayıt Ekle</h3>
<button @click="toggleAddModal" class="text-gray-500 hover:text-gray-700">
<i class="fas fa-times"></i>
</button>
</div>
</div>
<!-- Tabs -->
<div class="flex border-b border-gray-200">
<button
@click="activeTab = 'anxiety'"
:class="[
'flex-1 py-3 text-sm font-medium',
activeTab === 'anxiety'
? 'text-indigo-600 border-b-2 border-indigo-600'
: 'text-gray-500 hover:text-gray-700'
]"
>
Kaygı Seviyesi
</button>
<button
@click="activeTab = 'mood'"
:class="[
'flex-1 py-3 text-sm font-medium',
activeTab === 'mood'
? 'text-indigo-600 border-b-2 border-indigo-600'
: 'text-gray-500 hover:text-gray-700'
]"
>
Ruh Hali
</button>
<button
@click="activeTab = 'activity'"
:class="[
'flex-1 py-3 text-sm font-medium',
activeTab === 'activity'
? 'text-indigo-600 border-b-2 border-indigo-600'
: 'text-gray-500 hover:text-gray-700'
]"
>
Aktivite
</button>
</div>
<!-- Tab Content -->
<div class="p-4">
<!-- Anxiety Level Form -->
<div v-if="activeTab === 'anxiety'" class="space-y-4">
<div>
<label class="block text-sm font-medium text-gray-700 mb-1">Kaygı Seviyeniz (1-10)</label>
<div class="flex items-center space-x-4">
<span class="text-sm text-gray-500">1</span>
<input
type="range"
min="1"
max="10"
v-model="anxietyLevel"
class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
>
<span class="text-sm text-gray-500">10</span>
</div>
<div class="text-center mt-2">
<span class="text-2xl font-bold text-indigo-600">{{ anxietyLevel }}</span>
</div>
</div>
<div>
<label class="block text-sm font-medium text-gray-700 mb-1">Tarih ve Saat</label>
<div class="flex space-x-2">
<div class="relative flex-1">
<input type="date" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" value="2025-04-02">
</div>
<div class="relative flex-1">
<input type="time" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" value="14:30">
</div>
</div>
</div>
<div>
<label class="block text-sm font-medium text-gray-700 mb-1">Not (İsteğe bağlı)</label>
<textarea
class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm h-20 resize-none"
placeholder="Kaygı seviyenizle ilgili notlar..."
></textarea>
</div>
</div>
<!-- Mood Form -->
<div v-if="activeTab === 'mood'" class="space-y-4">
<div>
<label class="block text-sm font-medium text-gray-700 mb-3">Ruh Haliniz</label>
<div class="grid grid-cols-3 gap-3">
<button
@click="selectedMood = 'happy'"
:class="[
'flex flex-col items-center justify-center p-3 rounded-lg border',
selectedMood === 'happy'
? 'border-green-500 bg-green-50'
: 'border-gray-200 hover:bg-gray-50'
]"
>
<i class="fas fa-smile text-2xl mb-2" :class="selectedMood === 'happy' ? 'text-green-500' : 'text-gray-400'"></i>
<span class="text-xs font-medium" :class="selectedMood === 'happy' ? 'text-green-700' : 'text-gray-500'">Mutlu</span>
</button>
<button
@click="selectedMood = 'calm'"
:class="[
'flex flex-col items-center justify-center p-3 rounded-lg border',
selectedMood === 'calm'
? 'border-blue-500 bg-blue-50'
: 'border-gray-200 hover:bg-gray-50'
]"
>
<i class="fas fa-peace text-2xl mb-2" :class="selectedMood === 'calm' ? 'text-blue-500' : 'text-gray-400'"></i>
<span class="text-xs font-medium" :class="selectedMood === 'calm' ? 'text-blue-700' : 'text-gray-500'">Sakin</span>
</button>
<button
@click="selectedMood = 'normal'"
:class="[
'flex flex-col items-center justify-center p-3 rounded-lg border',
selectedMood === 'normal'
? 'border-yellow-500 bg-yellow-50'
: 'border-gray-200 hover:bg-gray-50'
]"
>
<i class="fas fa-meh text-2xl mb-2" :class="selectedMood === 'normal' ? 'text-yellow-500' : 'text-gray-400'"></i>
<span class="text-xs font-medium" :class="selectedMood === 'normal' ? 'text-yellow-700' : 'text-gray-500'">Normal</span>
</button>
<button
@click="selectedMood = 'anxious'"
:class="[
'flex flex-col items-center justify-center p-3 rounded-lg border',
selectedMood === 'anxious'
? 'border-orange-500 bg-orange-50'
: 'border-gray-200 hover:bg-gray-50'
]"
>
<i class="fas fa-frown text-2xl mb-2" :class="selectedMood === 'anxious' ? 'text-orange-500' : 'text-gray-400'"></i>
<span class="text-xs font-medium" :class="selectedMood === 'anxious' ? 'text-orange-700' : 'text-gray-500'">Endişeli</span>
</button>
<button
@click="selectedMood = 'sad'"
:class="[
'flex flex-col items-center justify-center p-3 rounded-lg border',
selectedMood === 'sad'
? 'border-red-500 bg-red-50'
: 'border-gray-200 hover:bg-gray-50'
]"
>
<i class="fas fa-sad-tear text-2xl mb-2" :class="selectedMood === 'sad' ? 'text-red-500' : 'text-gray-400'"></i>
<span class="text-xs font-medium" :class="selectedMood === 'sad' ? 'text-red-700' : 'text-gray-500'">Üzgün</span>
</button>
<button
@click="selectedMood = 'other'"
:class="[
'flex flex-col items-center justify-center p-3 rounded-lg border',
selectedMood === 'other'
? 'border-purple-500 bg-purple-50'
: 'border-gray-200 hover:bg-gray-50'
]"
>
<i class="fas fa-ellipsis-h text-2xl mb-2" :class="selectedMood === 'other' ? 'text-purple-500' : 'text-gray-400'"></i>
<span class="text-xs font-medium" :class="selectedMood === 'other' ? 'text-purple-700' : 'text-gray-500'">Diğer</span>
</button>
</div>
</div>
<div>
<label class="block text-sm font-medium text-gray-700 mb-1">Tarih ve Saat</label>
<div class="flex space-x-2">
<div class="relative flex-1">
<input type="date" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" value="2025-04-02">
</div>
<div class="relative flex-1">
<input type="time" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" value="14:30">
</div>
</div>
</div>
<div>
<label class="block text-sm font-medium text-gray-700 mb-1">Not (İsteğe bağlı)</label>
<textarea
class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm h-20 resize-none"
placeholder="Ruh halinizle ilgili notlar..."
></textarea>
</div>
</div>
<!-- Activity Form -->
<div v-if="activeTab === 'activity'" class="space-y-4">
<div>
<label class="block text-sm font-medium text-gray-700 mb-1">Aktivite Türü</label>
<select
v-model="activityType"
class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white"
>
<option value="meditation">Meditasyon</option>
<option value="breathing">Nefes Egzersizi</option>
<option value="walking">Yürüyüş</option>
<option value="yoga">Yoga</option>
<option value="reading">Kitap Okuma</option>
<option value="other">Diğer</option>
</select>
</div>
<div>
<label class="block text-sm font-medium text-gray-700 mb-1">Süre (dakika)</label>
<div class="flex items-center space-x-4">
<button
@click="activityDuration = Math.max(5, activityDuration - 5)"
class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-700"
>
<i class="fas fa-minus"></i>
</button>
<input
type="number"
v-model="activityDuration"
min="5"
step="5"
class="w-full text-center px-3 py-2 border border-gray-300 rounded-lg text-sm"
>
<button
@click="activityDuration = activityDuration + 5"
class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-700"
>
<i class="fas fa-plus"></i>
</button>
</div>
</div>
<div>
<label class="block text-sm font-medium text-gray-700 mb-1">Tarih ve Saat</label>
<div class="flex space-x-2">
<div class="relative flex-1">
<input type="date" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" value="2025-04-02">
</div>
<div class="relative flex-1">
<input type="time" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" value="14:30">
</div>
</div>
</div>
<div>
<label class="block text-sm font-medium text-gray-700 mb-1">Not (İsteğe bağlı)</label>
<textarea
v-model="activityNote"
class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm h-20 resize-none"
placeholder="Aktivitenizle ilgili notlar..."
></textarea>
</div>
</div>
</div>
<!-- Footer -->
<div class="p-4 border-t border-gray-200 flex justify-end space-x-3">
<button
@click="toggleAddModal"
class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 !rounded-button"
>
İptal
</button>
<button
@click="saveRecord"
class="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 !rounded-button"
>
Kaydet
</button>
</div>
</div>
</div>
<!-- Nav Bar -->
<div class="bg-indigo-600 text-white py-4 px-4 fixed top-0 w-full z-10 shadow-md">
<div class="flex justify-between items-center">
<div class="flex items-center">
<a href="https://readdy.ai/home/3ec48078-1ddb-4531-9b47-afcb36427bca/6ffcb548-a88f-4abc-ab06-99423c275b68" data-readdy="true" class="mr-3 cursor-pointer">
<i class="fas fa-arrow-left text-white"></i>
</a>
<h1 class="text-xl font-semibold">Huzur</h1>
</div>
<div class="flex items-center space-x-3">
<button class="p-2 rounded-full bg-indigo-500 hover:bg-indigo-700 cursor-pointer">
<i class="fas fa-bell text-white"></i>
</button>
<button class="p-2 rounded-full bg-indigo-500 hover:bg-indigo-700 cursor-pointer">
<i class="fas fa-cog text-white"></i>
</button>
</div>
</div>
</div>
<!-- Main Content -->
<div class="pt-20 px-4 pb-20">
<!-- Page Title -->
<div class="mb-6">
<div class="flex justify-between items-center">
<div>
<h2 class="text-2xl font-bold text-gray-800">İstatistiklerim</h2>
<p class="text-gray-600">2 Nisan 2025, Çarşamba</p>
</div>
<div class="w-12 h-12 rounded-full overflow-hidden">
<img src="https://public.readdy.ai/ai/img_res/e0ca5193c032ac0cfbe51826d12db276.jpg"
alt="Profil" class="w-full h-full object-cover" />
</div>
</div>
</div>
<!-- Time Period Selector -->
<div class="bg-white rounded-lg shadow-sm p-4 mb-6">
<div class="flex justify-between items-center mb-4">
<div class="flex space-x-2">
<button
v-for="(period, index) in timePeriods"
:key="index"
@click="selectTimePeriod(index)"
:class="[
'px-4 py-2 text-sm font-medium rounded-full cursor-pointer !rounded-button',
selectedTimePeriod === index
? 'bg-indigo-600 text-white'
: 'bg-gray-100 text-gray-700 hover:bg-gray-200'
]"
>
{{ period }}
</button>
</div>
<button class="p-2 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer">
<i class="fas fa-filter text-gray-700"></i>
</button>
</div>
<div class="flex items-center justify-between">
<div class="relative">
<button @click="toggleDatePicker" class="flex items-center space-x-2 px-3 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 cursor-pointer">
<i class="fas fa-calendar-alt text-indigo-600"></i>
<span>{{ currentDateRange }}</span>
<i class="fas fa-chevron-down text-gray-500"></i>
</button>
<div v-if="showDatePicker" class="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg p-3 z-10 w-64">
<div class="grid grid-cols-7 gap-1 text-center text-xs text-gray-500 mb-2">
<div v-for="day in ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz']" :key="day" class="py-1">
{{ day }}
</div>
</div>
<div class="grid grid-cols-7 gap-1">
<div v-for="date in 31" :key="date"
:class="[
'w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer',
date === selectedDate ? 'bg-indigo-600 text-white' : 'hover:bg-gray-100'
]"
@click="selectDate(date)"
>
{{ date }}
</div>
</div>
<div class="mt-3 flex justify-end">
<button @click="toggleDatePicker" class="px-3 py-1 bg-indigo-600 text-white rounded-lg text-sm cursor-pointer !rounded-button">
Tamam
</button>
</div>
</div>
</div>
</div>
</div>
<!-- Anxiety Level Chart -->
<div class="bg-white rounded-lg shadow-sm p-4 mb-6">
<div class="flex justify-between items-center mb-4">
<h3 class="text-lg font-semibold text-gray-800">Kaygı Seviyesi</h3>
<div class="flex items-center space-x-2">
<span class="text-sm text-gray-600">Ortalama: <span class="font-medium text-indigo-600">5.2</span></span>
</div>
</div>
<div ref="anxietyChartContainer" class="h-56 w-full"></div>
</div>
<!-- Mood Analysis -->
<div class="bg-white rounded-lg shadow-sm p-4 mb-6">
<div class="flex justify-between items-center mb-4">
<h3 class="text-lg font-semibold text-gray-800">Ruh Hali Analizi</h3>
<span class="text-sm text-gray-600">Son 7 gün</span>
</div>
<div class="flex">
<div ref="moodChartContainer" class="h-48 w-1/2"></div>
<div class="w-1/2 pl-4 flex flex-col justify-center">
<div v-for="(mood, index) in moodDistribution" :key="index" class="flex items-center mb-2">
<div :class="`w-3 h-3 rounded-full mr-2 ${mood.color}`"></div>
<span class="text-sm text-gray-700">{{ mood.name }}</span>
<span class="ml-auto text-sm font-medium">{{ mood.percentage }}%</span>
</div>
</div>
</div>
</div>
<!-- Activity Statistics -->
<div class="bg-white rounded-lg shadow-sm p-4 mb-6">
<h3 class="text-lg font-semibold text-gray-800 mb-4">Aktivite İstatistikleri</h3>
<div class="grid grid-cols-2 gap-4">
<div class="bg-indigo-50 rounded-lg p-4">
<div class="flex items-center justify-between mb-2">
<h4 class="text-indigo-800 font-medium">Meditasyon</h4>
<span class="text-xs bg-indigo-200 text-indigo-800 px-2 py-1 rounded-full">Haftalık</span>
</div>
<div class="relative pt-2">
<div ref="meditationChartContainer" class="h-24 w-full"></div>
<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
<div class="text-2xl font-bold text-indigo-700">75%</div>
<div class="text-xs text-indigo-600">Tamamlandı</div>
</div>
</div>
<div class="mt-2 text-xs text-indigo-700 text-center">
<span class="font-medium">120 dk</span> / 160 dk hedef
</div>
</div>
<div class="bg-blue-50 rounded-lg p-4">
<div class="flex items-center justify-between mb-2">
<h4 class="text-blue-800 font-medium">Nefes Egzersizleri</h4>
<span class="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded-full">Haftalık</span>
</div>
<div class="relative pt-2">
<div ref="breathingChartContainer" class="h-24 w-full"></div>
<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
<div class="text-2xl font-bold text-blue-700">60%</div>
<div class="text-xs text-blue-600">Tamamlandı</div>
</div>
</div>
<div class="mt-2 text-xs text-blue-700 text-center">
<span class="font-medium">6 seans</span> / 10 seans hedef
</div>
</div>
</div>
</div>
<!-- Improvement Trends -->
<div class="bg-white rounded-lg shadow-sm p-4 mb-6">
<div class="flex justify-between items-center mb-4">
<h3 class="text-lg font-semibold text-gray-800">İyileşme Trendleri</h3>
<span class="text-sm text-gray-600">Son 3 ay</span>
</div>
<div ref="trendsChartContainer" class="h-48 w-full"></div>
<div class="mt-4 p-3 bg-green-50 rounded-lg">
<div class="flex items-center">
<div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
<i class="fas fa-arrow-up text-green-600"></i>
</div>
<div>
<h4 class="text-green-800 font-medium">%23 İyileşme</h4>
<p class="text-sm text-green-700">Geçen aya göre kaygı seviyeniz düşüş gösterdi!</p>
</div>
</div>
</div>
</div>
<!-- Personalized Recommendations -->
<h3 class="text-lg font-semibold text-gray-800 mb-3">Kişiselleştirilmiş Öneriler</h3>
<div class="space-y-4 mb-6">
<div class="bg-white rounded-lg shadow-sm p-4">
<div class="flex">
<div class="w-12 h-12 bg-purple-100 rounded-full flex-shrink-0 flex items-center justify-center mr-3">
<i class="fas fa-brain text-purple-500 text-xl"></i>
</div>
<div>
<h4 class="font-medium text-gray-800 mb-1">Sabah Rutini Oluştur</h4>
<p class="text-sm text-gray-600 mb-3">Verilerinize göre sabah saatlerinde kaygı seviyeniz daha yüksek. Sabah meditasyonu ve nefes egzersizleri ile güne başlamayı deneyin.</p>
<a href="https://readdy.ai/home/3ec48078-1ddb-4531-9b47-afcb36427bca/78738f8d-9f03-4e8e-8a81-399b0c636716" data-readdy="true" class="text-sm px-4 py-2 bg-purple-100 text-purple-700 rounded-full cursor-pointer !rounded-button inline-block">Sabah Rutini Oluştur</a>
</div>
</div>
</div>
<div class="bg-white rounded-lg shadow-sm p-4">
<div class="flex">
<div class="w-12 h-12 bg-blue-100 rounded-full flex-shrink-0 flex items-center justify-center mr-3">
<i class="fas fa-wind text-blue-500 text-xl"></i>
</div>
<div>
<h4 class="font-medium text-gray-800 mb-1">Nefes Egzersizlerini Artır</h4>
<p class="text-sm text-gray-600 mb-3">Nefes egzersizleri yaptığınız günlerde kaygı seviyeniz ortalama %35 daha düşük. Haftada 3 gün daha nefes egzersizi yapmanızı öneriyoruz.</p>
<button class="text-sm px-4 py-2 bg-blue-100 text-blue-700 rounded-full cursor-pointer !rounded-button">Hatırlatıcı Kur</button>
</div>
</div>
</div>
<div class="bg-white rounded-lg shadow-sm p-4">
<div class="flex">
<div class="w-12 h-12 bg-green-100 rounded-full flex-shrink-0 flex items-center justify-center mr-3">
<i class="fas fa-walking text-green-500 text-xl"></i>
</div>
<div>
<h4 class="font-medium text-gray-800 mb-1">Fiziksel Aktivite Ekle</h4>
<p class="text-sm text-gray-600 mb-3">Fiziksel aktivite, kaygı seviyesini düşürmede etkili olabilir. Günlük 20 dakikalık yürüyüş veya hafif egzersizler deneyebilirsiniz.</p>
<button class="text-sm px-4 py-2 bg-green-100 text-green-700 rounded-full cursor-pointer !rounded-button">Aktivite Planla</button>
</div>
</div>
</div>
</div>
</div>
<!-- Tab Bar -->
<div class="bg-white fixed bottom-0 w-full shadow-lg border-t border-gray-200">
<div class="grid grid-cols-5 h-16">
<a href="https://readdy.ai/home/3ec48078-1ddb-4531-9b47-afcb36427bca/6ffcb548-a88f-4abc-ab06-99423c275b68" data-readdy="true" class="flex flex-col items-center justify-center text-gray-500 cursor-pointer">
<i class="fas fa-home text-xl"></i>
<span class="text-xs mt-1">Ana Sayfa</span>
</a>
<div class="flex flex-col items-center justify-center text-indigo-600 cursor-pointer">
<i class="fas fa-chart-line text-xl"></i>
<span class="text-xs mt-1">İstatistik</span>
</div>
<div class="flex flex-col items-center justify-center cursor-pointer">
<div class="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center -mt-5 shadow-lg" @click="toggleAddModal">
<i class="fas fa-plus text-white text-xl"></i>
</div>
</div>
<div class="flex flex-col items-center justify-center text-gray-500 cursor-pointer">
<i class="fas fa-dumbbell text-xl"></i>
<span class="text-xs mt-1">Egzersizler</span>
</div>
<div class="flex flex-col items-center justify-center text-gray-500 cursor-pointer">
<i class="fas fa-user text-xl"></i>
<span class="text-xs mt-1">Profil</span>
</div>
</div>
</div>
</div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
// Time Period Selection
const timePeriods = ['Günlük', 'Haftalık', 'Aylık'];
const selectedTimePeriod = ref(1); // Default to weekly
const selectTimePeriod = (index: number) => {
selectedTimePeriod.value = index;
updateCharts();
};
// Date Picker
const showDatePicker = ref(false);
const selectedDate = ref(2); // Current day (2 April)
const currentDateRange = ref('26 Mart - 2 Nisan');
const toggleDatePicker = () => {
showDatePicker.value = !showDatePicker.value;
};
const selectDate = (date: number) => {
selectedDate.value = date;
// In a real app, we would update the date range based on the selected date
// and the selected time period (daily, weekly, monthly)
};
// Add Modal
const showAddModal = ref(false);
const activeTab = ref('anxiety');
const anxietyLevel = ref(5);
const selectedMood = ref('normal');
const activityType = ref('meditation');
const activityDuration = ref(15);
const activityNote = ref('');
const toggleAddModal = () => {
showAddModal.value = !showAddModal.value;
};
const saveRecord = () => {
// In a real app, we would save the record to the database
// and update the charts accordingly
if (activeTab.value === 'anxiety') {
// Save anxiety record
console.log('Saving anxiety level:', anxietyLevel.value);
} else if (activeTab.value === 'mood') {
// Save mood record
console.log('Saving mood:', selectedMood.value);
} else if (activeTab.value === 'activity') {
// Save activity record
console.log('Saving activity:', {
type: activityType.value,
duration: activityDuration.value,
note: activityNote.value
});
}
// Reset form and close modal
resetForm();
showAddModal.value = false;
// Update charts to reflect new data
updateCharts();
};
const resetForm = () => {
anxietyLevel.value = 5;
selectedMood.value = 'normal';
activityType.value = 'meditation';
activityDuration.value = 15;
activityNote.value = '';
};
// Chart References
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
// Mood Distribution Data
const moodDistribution = [
{ name: 'Mutlu', percentage: 25, color: 'bg-green-500' },
{ name: 'Sakin', percentage: 30, color: 'bg-blue-500' },
{ name: 'Normal', percentage: 20, color: 'bg-yellow-500' },
{ name: 'Endişeli', percentage: 15, color: 'bg-orange-500' },
{ name: 'Üzgün', percentage: 10, color: 'bg-red-500' }
];
// Initialize Charts
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
// Update Charts based on selected time period
const updateCharts = () => {
if (selectedTimePeriod.value === 0) { // Daily
currentDateRange.value = '2 Nisan';
updateAnxietyChartDaily();
} else if (selectedTimePeriod.value === 1) { // Weekly
currentDateRange.value = '26 Mart - 2 Nisan';
updateAnxietyChartWeekly();
} else { // Monthly
currentDateRange.value = 'Nisan 2025';
updateAnxietyChartMonthly();
}
};
// Initialize Anxiety Chart
const initAnxietyChart = () => {
if (anxietyChartContainer.value) {
anxietyChart = echarts.init(anxietyChartContainer.value);
updateAnxietyChartWeekly(); // Default to weekly view
}
};
// Update Anxiety Chart for different time periods
const updateAnxietyChartDaily = () => {
if (!anxietyChart) return;
const option = {
color: ['#818cf8'],
tooltip: {
trigger: 'axis',
formatter: '{b}: {c}'
},
grid: {
left: '3%',
right: '4%',
bottom: '3%',
top: '10%',
containLabel: true
},
xAxis: {
type: 'category',
boundaryGap: false,
data: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
axisLine: {
lineStyle: {
color: '#ddd'
}
},
axisLabel: {
color: '#666'
}
},
yAxis: {
type: 'value',
min: 0,
max: 10,
axisLine: {
show: false
},
axisLabel: {
color: '#666'
},
splitLine: {
lineStyle: {
color: '#eee'
}
}
},
series: [
{
name: 'Kaygı Seviyesi',
type: 'line',
smooth: true,
lineStyle: {
width: 3
},
areaStyle: {
opacity: 0.2
},
data: [7, 6, 5, 4, 6, 5, 3, 4],
symbol: 'circle',
symbolSize: 8,
markLine: {
silent: true,
lineStyle: {
color: '#f87171',
type: 'dashed'
},
data: [{
yAxis: 7,
label: {
show: true,
position: 'end',
formatter: 'Yüksek Kaygı'
}
}]
}
}
]
};
anxietyChart.setOption(option);
};
const updateAnxietyChartWeekly = () => {
if (!anxietyChart) return;
const option = {
color: ['#818cf8'],
tooltip: {
trigger: 'axis',
formatter: '{b}: {c}'
},
grid: {
left: '3%',
right: '4%',
bottom: '3%',
top: '10%',
containLabel: true
},
xAxis: {
type: 'category',
boundaryGap: false,
data: ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'],
axisLine: {
lineStyle: {
color: '#ddd'
}
},
axisLabel: {
color: '#666'
}
},
yAxis: {
type: 'value',
min: 0,
max: 10,
axisLine: {
show: false
},
axisLabel: {
color: '#666'
},
splitLine: {
lineStyle: {
color: '#eee'
}
}
},
series: [
{
name: 'Kaygı Seviyesi',
type: 'line',
smooth: true,
lineStyle: {
width: 3
},
areaStyle: {
opacity: 0.2
},
data: [7, 5, 6, 4, 3, 5, 4],
symbol: 'circle',
symbolSize: 8,
markLine: {
silent: true,
lineStyle: {
color: '#f87171',
type: 'dashed'
},
data: [{
yAxis: 7,
label: {
show: true,
position: 'end',
formatter: 'Yüksek Kaygı'
}
}]
}
}
]
};
anxietyChart.setOption(option);
};
const updateAnxietyChartMonthly = () => {
if (!anxietyChart) return;
const days = Array.from({length: 30}, (_, i) => (i + 1).toString());
const data = Array.from({length: 30}, () => Math.floor(Math.random() * 6) + 2);
const option = {
color: ['#818cf8'],
tooltip: {
trigger: 'axis',
formatter: '{b} Nisan: {c}'
},
grid: {
left: '3%',
right: '4%',
bottom: '3%',
top: '10%',
containLabel: true
},
xAxis: {
type: 'category',
boundaryGap: false,
data: days,
axisLine: {
lineStyle: {
color: '#ddd'
}
},
axisLabel: {
color: '#666',
interval: 4
}
},
yAxis: {
type: 'value',
min: 0,
max: 10,
axisLine: {
show: false
},
axisLabel: {
color: '#666'
},
splitLine: {
lineStyle: {
color: '#eee'
}
}
},
series: [
{
name: 'Kaygı Seviyesi',
type: 'line',
smooth: true,
lineStyle: {
width: 3
},
areaStyle: {
opacity: 0.2
},
data: data,
symbol: 'circle',
symbolSize: 8,
markLine: {
silent: true,
lineStyle: {
color: '#f87171',
type: 'dashed'
},
data: [{
yAxis: 7,
label: {
show: true,
position: 'end',
formatter: 'Yüksek Kaygı'
}
}]
}
}
]
};
anxietyChart.setOption(option);
};
// Initialize Mood Chart
const initMoodChart = () => {
if (moodChartContainer.value) {
moodChart = echarts.init(moodChartContainer.value);
const option = {
color: ['#10b981', '#3b82f6', '#eab308', '#f97316', '#ef4444'],
series: [
{
name: 'Ruh Hali',
type: 'pie',
radius: ['40%', '70%'],
avoidLabelOverlap: false,
label: {
show: false
},
emphasis: {
label: {
show: false
}
},
labelLine: {
show: false
},
data: [
{ value: 25, name: 'Mutlu' },
{ value: 30, name: 'Sakin' },
{ value: 20, name: 'Normal' },
{ value: 15, name: 'Endişeli' },
{ value: 10, name: 'Üzgün' }
]
}
]
};
moodChart.setOption(option);
}
};
// Initialize Meditation Chart (Progress Circle)
const initMeditationChart = () => {
if (meditationChartContainer.value) {
meditationChart = echarts.init(meditationChartContainer.value);
const option = {
series: [
{
type: 'pie',
radius: ['80%', '100%'],
avoidLabelOverlap: false,
label: {
show: false
},
emphasis: {
label: {
show: false
}
},
labelLine: {
show: false
},
data: [
{ value: 75, name: 'Completed', itemStyle: { color: '#818cf8' } },
{ value: 25, name: 'Remaining', itemStyle: { color: '#e0e7ff' } }
]
}
]
};
meditationChart.setOption(option);
}
};
// Initialize Breathing Chart (Progress Circle)
const initBreathingChart = () => {
if (breathingChartContainer.value) {
breathingChart = echarts.init(breathingChartContainer.value);
const option = {
series: [
{
type: 'pie',
radius: ['80%', '100%'],
avoidLabelOverlap: false,
label: {
show: false
},
emphasis: {
label: {
show: false
}
},
labelLine: {
show: false
},
data: [
{ value: 60, name: 'Completed', itemStyle: { color: '#60a5fa' } },
{ value: 40, name: 'Remaining', itemStyle: { color: '#dbeafe' } }
]
}
]
};
breathingChart.setOption(option);
}
};
// Initialize Trends Chart
const initTrendsChart = () => {
if (trendsChartContainer.value) {
trendsChart = echarts.init(trendsChartContainer.value);
const option = {
tooltip: {
trigger: 'axis',
formatter: '{b}: {c}'
},
grid: {
left: '3%',
right: '4%',
bottom: '3%',
top: '3%',
containLabel: true
},
xAxis: {
type: 'category',
data: ['Şubat', 'Mart', 'Nisan'],
axisLine: {
lineStyle: {
color: '#ddd'
}
},
axisLabel: {
color: '#666'
}
},
yAxis: {
type: 'value',
min: 0,
max: 10,
axisLine: {
show: false
},
axisLabel: {
color: '#666'
},
splitLine: {
lineStyle: {
color: '#eee'
}
}
},
series: [
{
name: 'Ortalama Kaygı',
type: 'bar',
data: [6.8, 5.2, 4.0],
itemStyle: {
color: function(params: any) {
const colorList = ['#f87171', '#fbbf24', '#34d399'];
return colorList[params.dataIndex];
}
},
label: {
show: true,
position: 'top',
formatter: '{c}'
}
}
]
};
trendsChart.setOption(option);
}
};
</script>
<style scoped>
input[type="range"]::-webkit-slider-thumb {
-webkit-appearance: none;
appearance: none;
width: 20px;
height: 20px;
border-radius: 50%;
background: #6366f1;
cursor: pointer;
}
input[type="range"]::-moz-range-thumb {
width: 20px;
height: 20px;
border-radius: 50%;
background: #6366f1;
cursor: pointer;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
-webkit-appearance: none;
margin: 0;
}
input[type="number"] {
-moz-appearance: textfield;
}
</style>
