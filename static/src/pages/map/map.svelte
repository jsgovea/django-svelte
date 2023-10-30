<script>
    import { page } from "@inertiajs/inertia-svelte";
    import { onMount, onDestroy } from "svelte";
    import "leaflet/dist/leaflet.css";
    import L from "leaflet";
    import "l.movemarker";
    import policeSiren from "../../../assets/sounds/police_siren.wav";

    let mapElement;
    let map;

    onMount(async () => {
        // const leaflet = await import("leaflet");
        const leaflet = L;
        leaflet.Icon.Default.imagePath = "";

        map = leaflet.map(mapElement).setView([32.481674, -116.939936], 13);
        leaflet
            .tileLayer(
                "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
                {
                    attribution:
                        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                }
            )
            .addTo(map);
        // leaflet
        //     .marker([51.5, -0.09])
        //     .addTo(map)
        //     .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
        //     .openPopup();

        const policeStationIcon = leaflet.icon({
            iconUrl: "/static/img/policestation.png",
            iconSize: [38, 38],
            iconAnchor: [19, 38],
        });

        const policeCar = leaflet.icon({
            iconUrl: "/static/img/police_car.png",
            iconSize: [38, 38],
            iconAnchor: [19, 38],
        });

        leaflet
            .marker([32.481674, -116.939936], { icon: policeStationIcon })
            .bindPopup("Police station")
            .addTo(map);

        leaflet
            .marker([32.481674, -116.939936], { icon: policeCar })
            .bindPopup("Police car")
            .addTo(map);

        const instance = L.moveMarker(
            [
                [32.481674, -116.939936],
                [32.479936, -116.938949],
                [32.476605, -116.926932],
            ],
            {
                // duration: 5000, // in milliseconds (optional)
                speed: 25, // in km/h (optional)
                rotateAngle: 210, // (required if rotateMarker enable)
                animatePolyline: true, // (required)
            },
            {}
        ).addTo(map);

        instance.hidePolylines(true);
        // instance.getMarker().activeFollowMarker(true);
        instance.getMarker().setIcon(policeCar);
        playAudio();
    });

    setTimeout(() => {
        // Set the function to move the icons
    }, 3000);

    function playAudio() {
        let audio = new Audio();
        audio.src = policeSiren;
        audio.muted = true;
        audio.play();
    }

    onDestroy(async () => {
        if (map) {
            console.log("Unloading Leaflet map.");
            map.remove();
        }
    });
</script>

{$page.props.page_name}

<h1>Map page</h1>
<main>
    <div bind:this={mapElement} />
</main>
*

<style>
    @import "leaflet/dist/leaflet.css";
    main div {
        height: 400px;
        width: 600px;
    }
</style>
