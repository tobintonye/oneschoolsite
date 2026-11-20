from django.shortcuts import render

SCHOOLS = [
    {'name': 'Hallel College', 'place': 'Port Harcourt', 'logo': 'core/schools/hallel-college.jpg'},
    {'name': 'Ash Merlyn International School', 'place': 'Port Harcourt', 'logo': 'core/schools/ash-merlyn.jpg'},
]


def home(request):
    return render(request, 'core/home.html', {'schools': SCHOOLS})


def privacy(request):
    return render(request, 'core/privacy.html')
