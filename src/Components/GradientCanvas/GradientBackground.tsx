import React, { useEffect, useRef, useState } from "react";
import { NeatConfig, NeatGradient } from "@firecms/neat";

 const MyComponent: React.FC = () => {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const gradientRef = useRef<NeatGradient | null>(null);

    useEffect(() => {

        if (!canvasRef.current)
            return;

        gradientRef.current = new NeatGradient({
            ref: canvasRef.current,
         
    "colors": [
        {
            "color": "#8367C7",
            "enabled": true
        },
        {
            "color": "#5603AD",
            "enabled": true
        },
        {
            "color": "#9BA8C7",
            "enabled": true
        },
        {
            "color": "#B3E9C7",
            "enabled": true
        },
        {
            "color": "#F0FFF1",
            "enabled": false
        }
    ],
    "speed": 4,
    "horizontalPressure": 7,
    "verticalPressure": 6,
    "waveFrequencyX": 5,
    "waveFrequencyY": 4,
    "waveAmplitude": 10,
    "shadows": 5,
    "highlights": 4,
    "colorBrightness": 1,
    "colorSaturation": 10,
    "wireframe": false,
    "colorBlending": 6,
    "backgroundColor": "#003FFF",
    "backgroundAlpha": 1,
    "resolution": 1
        });

        return gradientRef.current.destroy;

    }, [canvasRef.current]);

    return (
        <canvas
           
            style={{
                isolation:"isolate",
                 position:"absolute",
                 zIndex:"-1",
                height: "130%",
                width: "100%",
            }}
            ref={canvasRef}
        />
    );
};
 export default MyComponent