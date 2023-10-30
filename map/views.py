from django.views import View

from inertia import render

# Create your views here.


class Index(View):
    def get(self, request):
        return render(
            request,
            "map/map",
            props={
                "events": [
                    "Milano",
                    "Napoli",
                ],
                "page_name": "Map",
            },
        )
