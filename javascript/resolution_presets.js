onUiLoaded(function () {
    // Defines resolution presets for SDXL
    const presets = [
        { label: "1:1", width: 1024, height: 1024, ratioClass: "ratio-1-1" },
        { label: "5:4", width: 1152, height: 896, ratioClass: "ratio-5-4" },
        { label: "4:5", width: 896, height: 1152, ratioClass: "ratio-4-5" },
        { label: "3:2", width: 1216, height: 832, ratioClass: "ratio-3-2" },
        { label: "2:3", width: 832, height: 1216, ratioClass: "ratio-2-3" },
        { label: "7:4", width: 1344, height: 768, ratioClass: "ratio-7-4" },
        { label: "4:7", width: 768, height: 1344, ratioClass: "ratio-4-7" },
        { label: "12:5", width: 1536, height: 640, ratioClass: "ratio-12-5" },
        { label: "5:12", width: 640, height: 1536, ratioClass: "ratio-5-12" },
        { label: "16:9", width: 1344, height: 768, ratioClass: "ratio-16-9" },
        { label: "9:16", width: 768, height: 1344, ratioClass: "ratio-9-16" },
    ];

    function updateInput(target) {
        let e = new Event("input", { bubbles: true });
        Object.defineProperty(e, "target", { value: target });
        target.dispatchEvent(e);
    }

    function createResolutionButtons(tabName) {
        // Find width/height sliders row
        const widthSlider = gradioApp().querySelector(`#${tabName}_width`);
        if (!widthSlider) return;

        // Try to find the common parent row for width and height
        const row = widthSlider.closest('.row, .gradio-row');
        if (!row) return;

        const containerId = `${tabName}_res_presets_container`;
        if (gradioApp().getElementById(containerId)) return;

        const container = document.createElement('div');
        container.id = containerId;
        container.className = 'sdxl-res-presets-container';

        presets.forEach(p => {
            const btn = document.createElement('div');
            btn.className = `sdxl-res-button ${p.ratioClass}`;
            btn.title = `${p.width} x ${p.height} (${p.label})`;
            btn.onclick = function () {
                const wInput = gradioApp().querySelector(`#${tabName}_width input[type='number']`);
                const hInput = gradioApp().querySelector(`#${tabName}_height input[type='number']`);

                if (wInput && hInput) {
                    wInput.value = p.width;
                    hInput.value = p.height;

                    updateInput(wInput);
                    updateInput(hInput);
                }
            };
            container.appendChild(btn);
        });

        // Insert before the row
        row.parentNode.insertBefore(container, row);
    }

    createResolutionButtons('txt2img');
    createResolutionButtons('img2img');
});
