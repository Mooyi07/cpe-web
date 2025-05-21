import React from 'react';
import { Card, CardContent } from '../components/ui/Card';
import { ExternalLink } from "lucide-react";
import Layout from "../layouts/Layout";

const StudentGuide = () => {
  return (
    <Layout>
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">Supervised Industrial Training (SIT) Guide</h1>

      <Card>
        <CardContent className="space-y-3 p-5">
          <h2 className="text-xl font-semibold">🔗 NBI Clearance</h2>
          <p>
            You can process your NBI clearance online via the official NBI page:
            <a
              href="https://clearance.nbi.gov.ph"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline inline-flex items-center ml-2"
            >
              Visit NBI Website <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-3 p-5">
          <h2 className="text-xl font-semibold">📋 SIT / OJT Requirements</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Barangay Certificate (2 photocopies)</li>
            <li>PSA/NSO Certificate (2 photocopies)</li>
            <li>PhilHealth Registration (2 photocopies)</li>
            <li>SSS E-Form (2 photocopies)</li>
            <li>Resume (2 photocopies)</li>
            <li>4 pcs 1x1 picture with white background</li>
            <li>4 pcs 2x2 picture with white background</li>
            <li>SIT Clearance (2 photocopies)</li>
            <li>Notarized Parent's Waiver (2 photocopies)</li>
            <li>Insurance Form (provided by ARS, 2 photocopies)</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-3 p-5">
          <h2 className="text-xl font-semibold">🚔 Nearest Police Clearance</h2>
          <p>Visit your local police station or nearest city/municipality police headquarters to obtain your police clearance.</p>
          {/* You can later fetch dynamic location data using an API or Firebase */}
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-3 p-5">
          <h2 className="text-xl font-semibold">🏥 Nearest Medical Requirements</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>X-Ray</li>
            <li>Drug Test</li>
            <li>CBC</li>
            <li>Urinalysis</li>
          </ul>
          <p>
            These can be done at most city health centers or accredited medical clinics. Choose one nearest to you for faster processing.
          </p>
        </CardContent>
      </Card>
    </div>
    </Layout>
  );
};

export default StudentGuide;
