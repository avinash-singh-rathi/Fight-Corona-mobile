<template>
  <q-page class="flex text-center">
    <div class="q-pa-sm">
        <div class="row q-mb-sm">
            <div class="col text-center q-mr-sm">
              <q-btn to="/report-patient">
                  <q-icon color="primary" size="3em" name="person_add" />
                  <div class="text-h7">
                      Report Patient
                  </div>
              </q-btn>
            </div>
            <div class="col text-center">
              <q-btn to="/patients">
                  <q-icon right color="primary" size="3em" name="list" />
                  <div class="text-h7">
                    View Patients
                  </div>
              </q-btn>
            </div>
        </div>
        <div class="row q-mb-sm">
            <div class="col text-center q-mr-sm">
              <q-btn to="/lostpatients">
                  <q-icon color="primary" size="3em" name="image_search" />
                  <div class="text-h7">
                      Lost Patients
                  </div>
              </q-btn>
            </div>
            <div class="col text-center q-mr-sm">
              <q-btn to="/news">
                  <q-icon right color="primary" size="3em" name="public" />
                  <div class="text-h7">
                    Correct News
                  </div>
              </q-btn>
            </div>
        </div>

        <div class="row q-mb-sm">
            <div class="col text-center q-mr-sm">
              <q-btn to="/symptoms">
                  <q-icon color="primary" size="3em" name="error" />
                  <div class="text-h7">
                      Corona Symptoms
                  </div>
              </q-btn>
            </div>
            <div class="col text-center q-mr-sm">
              <q-btn to="/helplines">
                  <q-icon right color="primary" size="3em" name="phone" />
                  <div class="text-h7">
                    Helpline Numbers
                  </div>
              </q-btn>
            </div>
        </div>

        <div class="row q-mb-sm">
            <div class="col text-center q-mr-sm">
              <q-btn to="/precautions">
                  <q-icon color="primary" size="3em" name="favorite" />
                  <div class="text-h7">
                      Take Precautions
                  </div>
              </q-btn>
            </div>
            <div class="col text-center q-mr-sm">
              <q-btn to="/feedbacks">
                  <q-icon right color="primary" size="3em" name="feedback" />
                  <div class="text-h7">
                    Share Feedback
                  </div>
              </q-btn>
            </div>
        </div>

        <div class="row q-mb-sm">
            <div class="col text-center q-mr-sm">
              <q-btn to="/suppliers">
                  <q-icon color="primary" size="3em" name="fastfood" />
                  <div class="text-h7">
                      Ration Home Delivery
                  </div>
              </q-btn>
            </div>
        </div>

    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
